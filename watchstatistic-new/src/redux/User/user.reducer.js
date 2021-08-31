import userTypes from "./user.types";

const INITIAL_STATE = {
	currentUser: null,
	signInSucess: false,
	signUpSucess: false,
	signUpError: [],
	resetPasswordSucess: false,
	resetPasswordError: []
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
		case userTypes.SIGN_UP_SUCESS:
			return {
				...state,
				signUpSucess: action.payload
			};
		case userTypes.SIGN_UP_ERROR:
			return {
				...state,
				signUpError: action.payload
			};
		case userTypes.RESET_PASSWORD_SUCESS:
			return {
				...state,
				resetPasswordSucess: action.payload
			};
		case userTypes.RESET_PASSWORD_ERROR:
			return {
				...state,
				resetPasswordError: action.payload
			};
		case userTypes.RESET_AUTH_FORMS:
			return {
				...state,
				signInSucess: false,
				signUpSucess: false,
				signUpError: [],
				resetPasswordSucess: false,
				resetPasswordError: []
			};
		default:
			return state;
	}
};

export default userReducer;
