import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AiOutlineMessage } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";

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

const RightIconsUser = ({
	handleMessagesOpen,
	handleMyAccountOpen,
	messageStatus
}) => {
	const classes = useStyles();
	const activeStyle = { color: "#FFA500" };

	return [
		<Button
			aria-controls="messages"
			className={classes.textBtn}
			activeStyle={activeStyle}
			disableRipple
			onClick={(e) => handleMessagesOpen(e)}
		>
			<AiOutlineMessage fontSize="1.5em" />
			&nbsp;({messageStatus})
		</Button>,
		<Button
			className={classes.textBtn}
			activeStyle={activeStyle}
			aria-controls="myAccount"
			disableRipple
			onClick={(e) => handleMyAccountOpen(e)}
		>
			<VscAccount fontSize="1.5em" />
			&nbsp;
		</Button>
	];
};

export default RightIconsUser;
