import marketTypes from "./market.types";
import { handleRemoveMarketItem } from "./market.utils";

const INITIAL_STATE = {
	marketProducts: []
};

/* type Action = {
	type: string;
	payload?: object;
}; */

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
					prevMarketItems: state.marketItems,
					marketItemToRemove: action.payload
				})
			};
		default:
			return state;
	}
};

export default marketReducer;
