import { Typography } from "@material-ui/core";
import React from "react";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateUserPreferences } from "../../../redux/User/user.actions";

const mapState = ({ user }) => ({
	currentUser: user.currentUser
});

const VisualPref = (props) => {
	const dispatch = useDispatch();
	const { currentUser } = useSelector(mapState);

	const configData = {
		userID: currentUser.id,
		backgroundImageOff: currentUser.backgroundImageOff ? false : true
	};
	const handleSetImageBackGround = () => {
		dispatch(updateUserPreferences(configData));
	};

	return (
		<div>
			<Typography>Global Preferences</Typography>
			<Divider style={{ width: "80%", background: "white" }} />
			<Typography>Watch Details</Typography>
			{!currentUser.backgroundImageOff && (
				<Button
					onClick={() => {
						handleSetImageBackGround();
					}}
				>
					Set Background Image Off
				</Button>
			)}
			{currentUser.backgroundImageOff && (
				<Button
					onClick={() => {
						handleSetImageBackGround();
					}}
				>
					Set Background Image On
				</Button>
			)}
		</div>
	);
};

export default VisualPref;
