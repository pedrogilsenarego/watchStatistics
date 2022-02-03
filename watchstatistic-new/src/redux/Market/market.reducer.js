import marketTypes from "./market.types";

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

		default:
			return state;
	}
};

export default marketReducer;
