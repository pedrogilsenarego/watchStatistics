import firebase from "../config/firebase-config";

const Logout = () => {
	return firebase
		.auth()
		.signOut()
		.catch((er) => {
			return er;
		});
};

export default Logout;
