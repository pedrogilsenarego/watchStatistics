import React, { useState, useEffect } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import LinearProgress, {
	linearProgressClasses
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
	height: 4,
	borderRadius: 5,
	[`&.${linearProgressClasses.colorPrimary}`]: {
		backgroundColor: "#1877a3"
	},
	[`& .${linearProgressClasses.bar}`]: {
		borderRadius: 5,
		backgroundColor: "#154A67"
	}
}));

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
	const [progress, setProgress] = useState(0);
	const { userVotes, displayName } = currentUser;

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

	useEffect(() => {
		if (rank() === "noob") setProgress((numberVotes / 5) * 100);
		if (rank() === "begginer") setProgress(((numberVotes - 5) / 5) * 100);
		if (rank() === "watch enthusiast")
			setProgress(((numberVotes - 10) / 10) * 100);
		if (rank() === "mature watch enthusiast")
			setProgress(((numberVotes - 20) / 30) * 100);
		if (rank() === "watch connoisseour")
			setProgress(((numberVotes - 50) / 100) * 100);
		if (rank() === "watch geek legend")
			setProgress(((numberVotes - 150) / 350) * 100);
		if (rank() === "watch god") setProgress(100);
		// eslint-disable-next-line
	}, []);

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

						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								paddingTop: "10px"
							}}
						>
							<BorderLinearProgress
								style={{ width: "50%" }}
								variant="determinate"
								value={progress}
							/>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</div>
	);
};

export default WatchstatisticsSubHeader;
