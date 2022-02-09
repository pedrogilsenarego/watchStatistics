import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const mapState = (state) => ({
	currentUser: state.user.currentUser
});

const useStyles = makeStyles((theme) => ({
	textBtn: {
		color: "#FFFFFF !important",
		fontSize: "13px",
		"&:hover": {
			color: "#FFA500"
		},
		"&:active": {
			color: "#FFFFFF"
		}
	}
}));

const Next = () => {
	const classes = useStyles();
	const history = useHistory();
	const { currentUser } = useSelector(mapState);

	const getWhiteBoxes = () => {
		if (!currentUser.whiteBox) return 0;
		else return currentUser.whiteBox;
	};

	const getBlueBoxes = () => {
		if (!currentUser.blueBox) return 0;
		else return currentUser.blueBox;
	};

	const getPurpleBoxes = () => {
		if (!currentUser.purpleBox) return 0;
		else return currentUser.purpleBox;
	};
	const getOrangeBoxes = () => {
		if (!currentUser.orangeBox) return 0;
		else return currentUser.orangeBox;
	};

	const getWatchesSubmited = () => {
		if (!currentUser.watchesSubmited) return 0;
		else return currentUser.watchesSubmited;
	};

	const userPoints = () => {
		const userPoints = {
			title: "Spend Points",
			link: "watchstatistics/watchlaboratory"
		};
		if (currentUser.points > 4) return userPoints;
		else return 0;
	};

	const submitNewWatch = () => {
		const newWatch = {
			title: "Submit Watch",
			link: "watchstatistics/addwatch"
		};
		if (getWatchesSubmited() < 10) return newWatch;
		else return 0;
	};

	const openBoxes = () => {
		const openBoxes = {
			title: "Open Boxes",
			link: "watchstatistics/watchlaboratory"
		};
		if (
			getWhiteBoxes() > 0 ||
			getBlueBoxes() > 0 ||
			getPurpleBoxes() > 0 ||
			getOrangeBoxes() > 0
		)
			return openBoxes;
		else return 0;
	};

	const nextItems = () => {
		const initialArray = [];
		if (userPoints() !== 0) initialArray.push(userPoints());
		if (openBoxes() !== 0) initialArray.push(openBoxes());
		if (submitNewWatch() !== 0) initialArray.push(submitNewWatch());
		return initialArray;
	};
	return (
		<div>
			<Container>
				<Grid container spacing={2} style={{ marginTop: "1px" }}>
					{nextItems().map((item, pos) => {
						return (
							<Grid item key={pos}>
								<Button
									onClick={() => history.push(`${item.link}`)}
									disableRipple
									className={classes.textBtn}
									style={{
										backgroundColor: "#18161E",

										borderRadius: "14px"
									}}
								>
									{item.title}
								</Button>
							</Grid>
						);
					})}
				</Grid>
			</Container>
		</div>
	);
};

export default Next;
