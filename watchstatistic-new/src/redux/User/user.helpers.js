import { auth } from "./../../firebase/utils";
import { firestore } from "./../../firebase/utils";

export const handleResetPasswordAPI = (email) => {
	const config = {
		url: "http://localhost:3000/login"
	};

	return new Promise((resolve, reject) => {
		auth
			.sendPasswordResetEmail(email, config)
			.then(() => {
				resolve();
			})
			.catch(() => {
				const err = ["Email not found. Please try again."];
				reject(err);
			});
	});
};

export const handleFetchUsers = () => {
	return new Promise((resolve, reject) => {
		const pageSize = 10;

		let ref = firestore
			.collection("users")
			.orderBy("experience", "desc")
			.limit(pageSize);

		ref
			.get()
			.then((snapshot) => {
				const totalCount = snapshot.size;

				const data = [
					...snapshot.docs.map((doc) => {
						return {
							...doc.data(),
							documentID: doc.id
						};
					})
				];

				resolve({
					data,
					queryDoc: snapshot.docs[totalCount - 1],
					isLastPage: totalCount < 1
				});
			})
			.catch((err) => {
				reject(err);
			});
	});
};

//implementations
export const handleUpdateUserPreferences = (product) => {
	const { userID, backgroundImageOff, displayName, flag } = product;

	return new Promise((resolve, reject) => {
		let ref = firestore.collection("users").doc(userID);

		if (flag === "username") ref = ref.update({ displayName: displayName });
		if (flag === "backgroundImage")
			ref = ref.update({ backgroundImageOff: backgroundImageOff });

		ref
			.then(() => {
				resolve();
			})
			.catch((err) => {
				reject(err);
			});
	});
};
