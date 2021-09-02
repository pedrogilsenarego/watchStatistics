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

export const handleFetchProducts = ({ filterType }) => {
	return new Promise((resolve, reject) => {
		let ref = firestore.collection("products").orderBy("createdDate"); //if descending on firebase, it is needed to pass the "descending" argument here after "created date"
		if (filterType) ref = ref.where("productCategory", "==", filterType);

		ref
			.get()
			.then((snapshot) => {
				const productsArray = snapshot.docs.map((doc) => {
					return {
						...doc.data(),
						documentID: doc.id
					};
				});
				resolve(productsArray);
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
					resolve({
						...snapshot.data(),
						documentID: productID
					});
				}
			})
			.catch((err) => {
				reject(err);
			});
	});
};
