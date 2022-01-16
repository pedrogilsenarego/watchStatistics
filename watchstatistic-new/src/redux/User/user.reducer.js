import userTypes from "./user.types";
const INITIAL_STATE = {
	currentUser: null,
	resetPasswordSuccess: false,
	userErr: [],
	users: []
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case userTypes.SIGN_IN_SUCCESS:
			return {
				...state,
				currentUser: action.payload,
				userErr: []
			};
		case userTypes.RESET_PASSWORD_SUCCESS:
			return {
				...state,
				resetPasswordSuccess: action.payload
			};
		case userTypes.USER_ERROR:
			return {
				...state,
				userErr: action.payload
			};
		case userTypes.RESET_USER_STATE:
		case userTypes.SIGN_OUT_USER_SUCCESS:
			return {
				...state,
				...INITIAL_STATE
			};
		case userTypes.SET_USERS:
			return {
				...state,
				users: action.payload
			};
		case userTypes.SET_PREFERENCES:
			return {
				...state,
				currentUser: action.payload
			};
		case userTypes.UPDATE_BOX_STATE:
			return {
				...state,
				currentUser: action.payload
			};
		case userTypes.UPDATE_COLLECTION_STATE:
			return {
				...state,
				currentUser: action.payload
			};
		default:
			return state;
	}
};

export default userReducer;
