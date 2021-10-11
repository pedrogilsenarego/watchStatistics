import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
	root: {
		height: "20vh",
		marginTop: "80px",
		background: "#196B91",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center"
	},
	container: {
		textAlign: "center"
	},
	item: {},
	text: {}
}));

const mapState = (state) => ({
	currentUser: state.user.currentUser
});

// eslint-disable-next-line
const WatchstatisticsSubHeader = ({}) => {
	const { currentUser } = useSelector(mapState);
	const classes = useStyles();
	const { userVotes, displayName } = currentUser;
	if (!currentUser) return null;

	const numberVotes = userVotes.length - 1;

	const rank = () => {
		if (numberVotes < 5) return "noob";
		if (numberVotes < 10) return "begginer";
		if (numberVotes < 20) return "watch enthusiast";
		if (numberVotes < 50) return "mature watch enthusiast";
		if (numberVotes < 150) return "watch connoisseour";
		if (numberVotes < 500) return "watch geek legend";
		else return "watch god";
	};

	return (
		<div>
			<Box className={classes.root}>
				<Grid container className={classes.container}>
					<Grid item xs={12} md={6} className={classes.item}>
						<Typography className={classes.text} variant="h5">
							Welcome, {displayName}
						</Typography>
						<Typography
							className={classes.text}
							variant="h6"
							style={{ color: "#ffffffB3" }}
						>
							have you voted today?
						</Typography>
					</Grid>
					<Grid item xs={12} md={6} className={classes.item}>
						<Typography variant="h6" className={classes.text}>
							Watches voted: {numberVotes}
						</Typography>
						<Typography variant="h6" className={classes.text}>
							Rank: {rank()}
						</Typography>
					</Grid>
				</Grid>
			</Box>
		</div>
	);
};

export default WatchstatisticsSubHeader;
