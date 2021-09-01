import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { checkUserIsAdmin } from "../Utils";

const mapState = ({ user }) => ({
	currentUser: user.currentUser
});

const useAdminAuth = (props) => {
	const { currentUser } = useSelector(mapState);
	const history = useHistory();
	useEffect(
		() => {
			if (!checkUserIsAdmin(currentUser)) {
				history.push("/login");
			}
		},
		// eslint-disable-next-line
		[currentUser]
	);
	return currentUser;
};

export default useAdminAuth;
