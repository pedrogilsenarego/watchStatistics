import { auth } from "./../../firebase/utils";
import { takeLatest, put, all, call } from "redux-saga/effects";
import {
	setProducts,
	setLatestProducts,
	setValidationProducts,
	setProduct,
	fetchValidationProductsStart,
	fetchProductStart
} from "./products.actions";
import {
	handleAddProduct,
	handleFetchProducts,
	handleFetchLatestProducts,
	handleFetchValidationProducts,
	handleFetchProduct,
	handleDeleteProduct,
	handleUpdateVote,
	handleUpdateDetails,
	handleUserVote,
	handleUserUpdateDetails
} from "./products.helpers";
import productsTypes from "./products.types";
import { checkUserSession } from "../User/user.actions";

export function* addProduct({ payload }) {
	try {
		const timestamp = new Date();
		yield handleAddProduct({
			...payload,
			UserUID: auth.currentUser.uid,
			createdDate: timestamp
		});
		yield handleUserUpdateDetails({
			...payload
		});
		//yield put(fetchProductsStart());
	} catch (err) {
		// console.log(err);
	}
}

export function* onAddProductStart() {
	yield takeLatest(productsTypes.ADD_NEW_PRODUCT_START, addProduct);
}

export function* fetchProducts({ payload }) {
	try {
		const products = yield handleFetchProducts(payload);
		yield put(setProducts(products));
	} catch (err) {
		// console.log(err);
	}
}

export function* onFetchProductsStart() {
	yield takeLatest(productsTypes.FETCH_PRODUCTS_START, fetchProducts);
}

export function* deleteProduct({ payload }) {
	try {
		yield handleDeleteProduct(payload);
		yield put(fetchValidationProductsStart());
	} catch (err) {
		// console.log(err);
	}
}

export function* onDeleteProductStart() {
	yield takeLatest(productsTypes.DELETE_PRODUCT_START, deleteProduct);
}

export function* fetchProduct({ payload }) {
	try {
		const product = yield handleFetchProduct(payload);
		yield put(setProduct(product));
	} catch (err) {
		// console.log(err);
	}
}

export function* onFetchProductStart() {
	yield takeLatest(productsTypes.FETCH_PRODUCT_START, fetchProduct);
}

export function* updateVote({ payload }) {
	try {
		yield handleUpdateVote({
			...payload
		});
		yield handleUserVote({
			...payload
		});
		yield put(fetchProductStart(payload.productID));
		yield put(checkUserSession());
	} catch (err) {
		// console.log(err);
	}
}

export function* onUpdateProductVoteStart() {
	yield takeLatest(productsTypes.UPDATE_PRODUCT_VOTE_START, updateVote);
}

export function* fetchLatestProducts({ payload }) {
	try {
		const latestProducts = yield handleFetchLatestProducts(payload);
		yield put(setLatestProducts(latestProducts));
	} catch (err) {
		// console.log(err);
	}
}

export function* onFetchLatestProductsStart() {
	yield takeLatest(
		productsTypes.FETCH_LATEST_PRODUCTS_START,
		fetchLatestProducts
	);
}

export function* fetchValidationProducts({ payload }) {
	try {
		const validationProducts = yield handleFetchValidationProducts(payload);
		yield put(setValidationProducts(validationProducts));
	} catch (err) {
		// console.log(err);
	}
}

export function* onFetchValidationProductsStart() {
	yield takeLatest(
		productsTypes.FETCH_VALIDATION_PRODUCTS_START,
		fetchValidationProducts
	);
}

//new implementation

export function* updateDetails({ payload }) {
	try {
		yield handleUpdateDetails({
			...payload
		});
		yield handleUserUpdateDetails({
			...payload
		});
	} catch (err) {
		// console.log(err);
	}
}

export function* onUpdateProductDetailsStart() {
	yield takeLatest(productsTypes.UPDATE_PRODUCT_DETAILS_START, updateDetails);
}

export default function* productsSagas() {
	yield all([
		call(onAddProductStart),
		call(onFetchProductsStart),
		call(onDeleteProductStart),
		call(onFetchProductStart),
		call(onUpdateProductVoteStart),
		call(onUpdateProductDetailsStart),
		call(onFetchLatestProductsStart),
		call(onFetchValidationProductsStart)
		//new implementation
	]);
}
