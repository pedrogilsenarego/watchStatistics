import marketTypes from "./market.types";
import { handleRemoveMarketItem } from "./market.utils";

const INITIAL_STATE = {
	marketProducts: []
};

/* interface SetMarketProducts {
	type: "SET_MARKET_PRODUCTS";
	payload: Array<object>;
}

interface RemoveMarketItem {
	type: "REMOVE_MARKET_ITEM";
	payload: Array<object>;
}

type Action = SetMarketProducts | RemoveMarketItem; */

const marketReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case marketTypes.SET_MARKET_PRODUCTS:
			return {
				...state,
				marketProducts: action.payload.data
			};
		case marketTypes.REMOVE_MARKET_ITEM:
			return {
				...state,
				marketProducts: handleRemoveMarketItem({
					prevMarketProducts: state.marketProducts,
					marketItemToRemove: action.payload
				})
			};
		default:
			return state;
	}
};

export default marketReducer;
