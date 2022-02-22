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
	payload: products.data
});

export const buyMarketProduct = (productID) => ({
	type: marketTypes.BUY_MARKET_PRODUCT_START,
	payload: productID
});

export const removeMarketItem = (marketItem) => ({
	type: marketTypes.REMOVE_MARKET_ITEM,
	payload: marketItem
});

export const removeOneMarketItem = (marketItem) => ({
	type: marketTypes.REMOVE_ONE_MARKET_ITEM,
	payload: marketItem
});
