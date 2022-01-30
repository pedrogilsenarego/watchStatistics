import { takeLatest, put, all, call } from "redux-saga/effects";
import { setToAuction } from "./market.actions";
import marketTypes from "./market.types";
import { handleAddToAuction } from "./market.helpers.js";

export function* addToAuction({ payload }) {
	try {
		yield handleAddToAuction({});
	} catch (err) {}
}

export function* onAddToAuctionStart() {
	yield takeLatest(marketTypes.ADD_TO_AUCTION, addToAuction);
}

export default function* marketSagas() {
	yield all([call(onAddToAuctionStart)]);
}
