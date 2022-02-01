import marketTypes from "./market.types";

export const setToAuction = (order) => ({
	type: marketTypes.ADD_TO_AUCTION,
	payload: order
});

export const fetchMarketProductsStart = (filters = {}) => ({
	type: marketTypes.FETCH_MARKET_PRODUCTS_START,
	payload: filters
});

export const setMarketProducts = (products) => ({
	type: marketTypes.SET_MARKET_PRODUCTS,
	payload: products
});
