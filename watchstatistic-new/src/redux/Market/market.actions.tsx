import marketTypes from "./market.types";

export const addToAuction = (order: object) => ({
	type: marketTypes.ADD_TO_AUCTION,
	payload: order
});
