import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	textBtn: {
		color: "#FFFFFF",
		fontSize: "13px",
		"&:hover": {
			color: "#FFA500"
		},
		"&:active": {
			color: "#FFFFFF"
		}
	}
}));

const MediaRightIconsNoUser = ({ handleSignupOpen, handleLoginOpen }) => {
	const classes = useStyles();
	const activeStyle = { color: "#FFA500" };

	return [
		<Button
			aria-controls="signup"
			disableRipple
			className={classes.textBtn}
			activeStyle={activeStyle}
			onClick={(e) => handleSignupOpen(e)}
		>
			Signup
		</Button>,
		<Button
			aria-controls="login"
			disableRipple
			className={classes.textBtn}
			activeStyle={activeStyle}
			onClick={(e) => handleLoginOpen(e)}
		>
			Login
		</Button>
	];
};

export default MediaRightIconsNoUser;
