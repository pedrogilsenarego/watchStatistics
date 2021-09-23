import { firestore } from "./../../firebase/utils";

export const handleAddProduct = (product) => {
	return new Promise((resolve, reject) => {
		firestore
			.collection("products")
			.doc()
			.set(product)
			.then(() => {
				resolve();
			})
			.catch((err) => {
				reject(err);
			});
	});
};

export const handleFetchProducts = ({
	filterType,
	filter,
	startAfterDoc,
	persistProducts = []
}) => {
	return new Promise((resolve, reject) => {
		const pageSize = 8;
		const where = filter;

		let ref = firestore
			.collection("products")
			.orderBy("createdDate")
			.limit(pageSize);

		if (filterType) ref = ref.where(where, "==", filterType);
		//if (ref === {}) ref = ref.where("productCategory", "==", filterType);
		if (startAfterDoc) ref = ref.startAfter(startAfterDoc);

		ref
			.get()
			.then((snapshot) => {
				const totalCount = snapshot.size;

				const data = [
					...persistProducts,
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

export const handleDeleteProduct = (documentID) => {
	return new Promise((resolve, reject) => {
		firestore
			.collection("products")
			.doc(documentID)
			.delete()
			.then(() => {
				//console.log(documentID, 2);
				resolve();
			})
			.catch((err) => {
				reject(err);
			});
	});
};

export const handleFetchProduct = (productID) => {
	return new Promise((resolve, reject) => {
		firestore
			.collection("products")
			.doc(productID)
			.get()
			.then((snapshot) => {
				if (snapshot.exists) {
					resolve(snapshot.data());
				}
			})
			.catch((err) => {
				reject(err);
			});
	});
};

export const handleUpdateVote = (product) => {
	const {
		productID,
		numberVotesOwn,
		numberVotesNotOwn,
		votationsNonOwn,
		votationsOwn,
		avgVotationsOwn,
		avgVotationsNotOwn,
		avgTotal
	} = product;
	return new Promise((resolve, reject) => {
		firestore
			.collection("products")
			.doc(productID)
			.update({
				numberVotesOwn,
				numberVotesNotOwn,
				votationsNonOwn,
				votationsOwn,
				avgVotationsOwn,
				avgVotationsNotOwn,
				avgTotal
			})
			.then(() => {
				resolve();
			})
			.catch((err) => {
				reject(err);
			});
	});
};

//new Implementation

export const handleUserVote = (product) => {
	const { userID, userVotes } = product;
	return new Promise((resolve, reject) => {
		firestore
			.collection("users")
			.doc(userID)
			.update({
				userVotes: userVotes
			})
			.then(() => {
				resolve();
			})
			.catch((err) => {
				reject(err);
			});
	});
};
