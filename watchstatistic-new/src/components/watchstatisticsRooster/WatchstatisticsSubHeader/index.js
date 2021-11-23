import React, { useState, useEffect } from "react";
import {
	Box,
	Grid,
	Typography,
	Button,
	useMediaQuery,
	useTheme
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import LinearProgress, {
	linearProgressClasses
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import { GiTrophyCup } from "react-icons/gi";

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

const mapState = (state) => ({
	currentUser: state.user.currentUser
});

// eslint-disable-next-line
const WatchstatisticsSubHeader = ({}) => {
	const theme = useTheme();
	const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
	const { currentUser } = useSelector(mapState);

	const [progress, setProgress] = useState(0);
	const { userVotes, displayName, experience, watchesSubmited, points } =
		currentUser;

	const useStyles = makeStyles((theme) => ({
		root: {
			height: isMatch ? "30vh" : "20vh",
			marginTop: "80px",
			background: "#196B91",
			display: "flex",
			flexDirection: "column",
			justifyContent: "center"
		},
		container: {
			textAlign: "center",
			display: "flex",

			justifyContent: "center"
		},
		item: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "center"
		},
		text: {}
	}));

	const classes = useStyles();

	const numberVotes = userVotes.length - 1;

	const rank = () => {
		if (!experience) return;
		if (experience < 20) return "Noob";
		if (experience < 100) return "Begginer";
		if (experience < 200) return "Watch Enthusiast";
		if (experience < 500) return "Mature Watch Enthusiast";
		if (experience < 1500) return "Watch Connoisseour";
		if (experience < 5000) return "Watch Geek Legend";
		else return "Watch God";
	};

	useEffect(() => {
		if (rank() === "Noob") setProgress((experience / 20) * 100);
		if (rank() === "Begginer") setProgress(((experience - 20) / 80) * 100);
		if (rank() === "Watch enthusiast")
			setProgress(((experience - 100) / 100) * 100);
		if (rank() === "Mature watch enthusiast")
			setProgress(((experience - 200) / 300) * 100);
		if (rank() === "Watch connoisseour")
			setProgress(((experience - 500) / 1000) * 100);
		if (rank() === "Watch geek legend")
			setProgress(((experience - 1500) / 3500) * 100);
		if (rank() === "Watch god") setProgress(100);
		// eslint-disable-next-line
	}, []);

	const colorRank = () => {
		if (rank() === "Noob") return "#ffffff66";
		if (rank() === "Begginer") return "white";
		if (rank() === "Watch Enthusiast") return "green";
		if (rank() === "Mature Watch Enthusiast") return "blue";
		if (rank() === "Watch Connoisseour") return "purple";
		if (rank() === "Watch Geek Legend") return "orange";
		if (rank() === "Watch God") return "red";
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
					<Grid
						item
						xs={12}
						md={6}
						className={classes.item}
						style={{ marginTop: isMatch ? "20px" : "0px" }}
					>
						<Grid container>
							<Grid item xs={4} className={classes.item}>
								<Button
									style={{
										marginLeft: isMatch ? "30px" : "60px",
										marginRight: isMatch ? "30px" : "60px"
									}}
								>
									<Grid
										container
										style={{
											display: "flex",
											flexDirection: "column",
											justifyContent: "center"
										}}
									>
										<GiTrophyCup
											size="3em"
											style={{ marginLeft: isMatch ? "33%" : "24%" }}
										/>
										<Typography style={{ fontSize: "14px" }}>Badges</Typography>
									</Grid>
								</Button>
							</Grid>
							<Grid item xs={8}>
								<Typography variant="h6" className={classes.text}>
									Watches Voted: {numberVotes}
								</Typography>
								<Typography variant="h6" className={classes.text}>
									Watches Submited: {watchesSubmited}
								</Typography>
								<Typography
									variant="h6"
									className={classes.text}
									style={{ color: colorRank() }}
								>
									Rank: {rank()} / Points: {points}
								</Typography>
								<Box
									sx={{
										display: "flex",
										justifyContent: "center",
										paddingTop: "5px"
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
					</Grid>
				</Grid>
			</Box>
		</div>
	);
};

export default WatchstatisticsSubHeader;
