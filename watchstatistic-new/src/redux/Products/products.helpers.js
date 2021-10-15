import { firestore } from "./../../firebase/utils";
import firebase from "firebase/app";

export const handleAddProduct = (product) => {
	const admin = product.admin;
	const where = admin ? "products" : "orders";
	delete product.admin;

	return new Promise((resolve, reject) => {
		firestore
			.collection(where)
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
	pageSize,
	startAfterDoc,
	persistProducts = []
}) => {
	return new Promise((resolve, reject) => {
		const where = filter;

		let ref = firestore
			.collection("products")
			.orderBy("avgTotal", "desc")
			.limit(pageSize);

		if (filterType) ref = ref.where(where, "==", filterType);
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
			.collection("orders")
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

export const handleUserVote = (product) => {
	const { userID, userVotes, numberVotes, experience } = product;
	return new Promise((resolve, reject) => {
		firestore
			.collection("users")
			.doc(userID)
			.update({
				userVotes: userVotes,
				numberVotes: numberVotes,
				experience: experience
			})
			.then(() => {
				resolve();
			})
			.catch((err) => {
				reject(err);
			});
	});
};

export const handleFetchLatestProducts = ({
	filterType,
	filter,
	pageSize,
	startAfterDoc,
	persistProducts = []
}) => {
	return new Promise((resolve, reject) => {
		const where = filter;

		let ref = firestore
			.collection("products")
			.orderBy("createdDate", "desc")
			.limit(pageSize);

		if (filterType) ref = ref.where(where, "==", filterType);
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

//new implementations
export const handleFetchValidationProducts = ({
	filterType,
	filter,
	pageSize,
	startAfterDoc,
	persistProducts = []
}) => {
	return new Promise((resolve, reject) => {
		const where = filter;

		let ref = firestore
			.collection("orders")
			.orderBy("createdDate")
			.limit(pageSize);

		if (filterType) ref = ref.where(where, "==", filterType);
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

//new implementation
export const handleUpdateDetails = (product) => {
	const {
		productID,
		caliber,
		movement,
		caseSize,
		productionYears,
		caseMaterial,
		waterResistance
	} = product;
	const data = {
		caliber,
		movement,
		productionYears,
		caseSize,
		caseMaterial,
		waterResistance
	};
	if (!movement) delete data.movement;
	if (!caliber) delete data.caliber;
	if (!productionYears) delete data.productionYears;
	if (!caseSize) delete data.caseSize;
	if (!caseMaterial) delete data.caseMaterial;
	if (!waterResistance) delete data.waterResistance;

	return new Promise((resolve, reject) => {
		firestore
			.collection("products")
			.doc(productID)
			.update(data)
			.then(() => {
				resolve();
			})
			.catch((err) => {
				reject(err);
			});
	});
};

export const handleUserUpdateDetails = (product) => {
	const {
		UserUID,
		movement,
		caliber,
		productionYears,
		caseSize,
		caseMaterial,
		waterResistance,
		productDesc
	} = product;
	var incrementExp = 0;
	if (!productDesc) {
		if (waterResistance) {
			incrementExp = incrementExp + 0.5;
		}
		if (movement) {
			incrementExp = incrementExp + 0.5;
		}
		if (caliber) {
			incrementExp = incrementExp + 0.5;
		}
		if (productionYears) {
			incrementExp = incrementExp + 0.5;
		}
		if (caseSize) {
			incrementExp = incrementExp + 0.5;
		}
		if (caseMaterial) {
			incrementExp = incrementExp + 0.5;
		}
	}
	if (productDesc) {
		incrementExp = incrementExp + 4;
	}

	return new Promise((resolve, reject) => {
		firestore
			.collection("users")
			.doc(UserUID)
			.update({
				experience: firebase.firestore.FieldValue.increment(incrementExp)
			})
			.then(() => {
				resolve();
			})
			.catch((err) => {
				reject(err);
			});
	});
};
