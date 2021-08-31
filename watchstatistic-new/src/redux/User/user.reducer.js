import userTypes from "./user.types";

const INITIAL_STATE = {
	currentUser: null,
	signInSucess: false
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case userTypes.SET_CURRENT_USER:
			return {
				...state,
				currentUser: action.payload
			};
		case userTypes.SIGN_IN_SUCESS:
			return {
				...state,
				signInSucess: action.payload
			};
		default:
			return state;
	}
};

export default userReducer;
