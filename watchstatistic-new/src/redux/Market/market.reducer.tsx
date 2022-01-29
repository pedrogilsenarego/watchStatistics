//import marketTypes from "./market.types";

const INITIAL_STATE = {};

type Action = {
	type: string;
	payload?: object;
};

const marketReducer = (state = INITIAL_STATE, action: Action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default marketReducer;
