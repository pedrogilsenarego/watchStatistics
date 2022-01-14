import userTypes from "./user.types";

export const emailSignInStart = (userCredentials) => ({
	type: userTypes.EMAIL_SIGN_IN_START,
	payload: userCredentials
});

export const signInSuccess = (user) => ({
	type: userTypes.SIGN_IN_SUCCESS,
	payload: user
});

export const checkUserSession = () => ({
	type: userTypes.CHECK_USER_SESSION
});

export const signOutUserStart = () => ({
	type: userTypes.SIGN_OUT_USER_START
});

export const signOutUserSuccess = () => ({
	type: userTypes.SIGN_OUT_USER_SUCCESS
});

export const signUpUserStart = (userCredentials) => ({
	type: userTypes.SIGN_UP_USER_START,
	payload: userCredentials
});

export const userError = (err) => ({
	type: userTypes.USER_ERROR,
	payload: err
});

export const resetPasswordStart = (userCredentials) => ({
	type: userTypes.RESET_PASSWORD_START,
	payload: userCredentials
});

export const resetPasswordSuccess = () => ({
	type: userTypes.RESET_PASSWORD_SUCCESS,
	payload: true
});

export const resetUserState = () => ({
	type: userTypes.RESET_USER_STATE
});

export const googleSignInStart = () => ({
	type: userTypes.GOOGLE_SIGN_IN_START
});

export const fetchUsersStart = () => ({
	type: userTypes.FETCH_USERS_START
});

export const setUsers = (usersData) => ({
	type: userTypes.SET_USERS,
	payload: usersData
});

export const updateUserPreferences = (preferencesData) => ({
	type: userTypes.SET_PREFERENCES,
	payload: preferencesData
});
export const updateBoxStatus = (boxStatus) => ({
	type: userTypes.UPDATE_BOX_STATE,
	payload: boxStatus
});
//new implementation
export const updateCollectionStatus = (collectionStatus) => ({
	type: userTypes.UPDATE_COLLECTION_STATE,
	payload: collectionStatus
});
