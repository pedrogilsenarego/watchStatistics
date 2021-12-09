import productsTypes from "./products.types";
import productTypes from "./products.types";

const INITIAL_STATE = {
	products: [],
	latestProducts: [],
	validationProducts: [],
	product: {},
	sidePanel: "graph"
};

const productsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case productTypes.SET_PRODUCTS:
			return {
				...state,
				products: action.payload
			};
		case productTypes.SET_LATEST_PRODUCTS:
			return {
				...state,
				latestProducts: action.payload
			};
		case productTypes.SET_VALIDATION_PRODUCTS:
			return {
				...state,
				validationProducts: action.payload
			};
		case productsTypes.SET_PRODUCT:
			return {
				...state,
				product: action.payload
			};

		default:
			return state;
	}
};

export default productsReducer;
