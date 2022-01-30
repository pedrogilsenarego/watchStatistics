import marketTypes from "./market.types";

export const setToAuction = (order: object) => ({
	type: marketTypes.ADD_TO_AUCTION,
	payload: order
});
