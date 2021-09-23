import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AiOutlineCodeSandbox, AiOutlineInfoCircle } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { VscHome } from "react-icons/vsc";

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

const LeftIcons = ({
	watchstatistics,
	handleSupportOpen,
	handleWatchstatisticsOpen
}) => {
	const classes = useStyles();
	const activeStyle = { color: "#FFA500" };

	return (
		<div>
			<Button
				className={classes.textBtn}
				activeStyle={activeStyle}
				component={NavLink}
				disableRipple
				to="/"
				exact
			>
				<VscHome fontSize="1.5em" />
				&nbsp;Home
			</Button>

			<Button
				disabled={watchstatistics}
				aria-controls="watchstatistics"
				className={classes.textBtn}
				activeStyle={activeStyle}
				disableRipple
				onClick={(e) => handleWatchstatisticsOpen(e)}
			>
				{" "}
				<BsGraphUp />
				&nbsp;WatchStatistics
			</Button>
			<Button
				disabled
				className={classes.textBtn}
				activeStyle={activeStyle}
				disableRipple
			>
				<AiOutlineCodeSandbox fontSize="1.5em" /> &nbsp;WatchBoxes
			</Button>

			<Button
				aria-controls="support"
				disableRipple
				className={classes.textBtn}
				activeStyle={activeStyle}
				onClick={(e) => handleSupportOpen(e)}
			>
				<AiOutlineInfoCircle fontSize="1.5em" />
				&nbsp; About
			</Button>
		</div>
	);
};

export default LeftIcons;