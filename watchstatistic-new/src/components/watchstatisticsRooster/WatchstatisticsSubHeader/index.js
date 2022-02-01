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
import Container from "@mui/material/Container";

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
	const { userVotes, displayName, experience, watchesSubmited } = currentUser;

	const useStyles = makeStyles((theme) => ({
		root: {
			height: isMatch ? "35vh" : "20vh",
			marginTop: "80px",
			background: theme.palette.home.primary,
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
		if (experience < 200) return "Enthusiast";
		if (experience < 500) return "Mature";
		if (experience < 1500) return "Connoisseour";
		if (experience < 5000) return "Geek Legend";
		else return "God";
	};

	useEffect(() => {
		if (rank() === "Noob") setProgress((experience / 20) * 100);
		if (rank() === "Begginer") setProgress(((experience - 20) / 80) * 100);
		if (rank() === "Enthusiast") setProgress(((experience - 100) / 100) * 100);
		if (rank() === "Mature") setProgress(((experience - 200) / 300) * 100);
		if (rank() === "Connoisseour")
			setProgress(((experience - 500) / 1000) * 100);
		if (rank() === "Geek legend")
			setProgress(((experience - 1500) / 3500) * 100);
		if (rank() === "God") setProgress(100);
		// eslint-disable-next-line
	}, []);

	const colorRank = () => {
		if (rank() === "Noob") return "#ffffff66";
		if (rank() === "Begginer") return "white";
		if (rank() === "Enthusiast") return "green";
		if (rank() === "Mature") return "blue";
		if (rank() === "Connoisseour") return "purple";
		if (rank() === "Geek Legend") return "orange";
		if (rank() === "God") return "red";
	};

	return (
		<div>
			<Container className={classes.root}>
				<Grid
					container
					className={classes.container}
					style={{ marginTop: isMatch ? "15px" : "0px" }}
				>
					<Grid item xs={12} sm={6} className={classes.item}>
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
						sm={6}
						className={classes.item}
						style={{ marginTop: isMatch ? "20px" : "0px" }}
					>
						<Grid
							container
							spacing={0}
							justify="center"
							style={{ paddingRight: "40px" }}
						>
							<Grid item xs={6} md={3} className={classes.item}>
								<Button
									style={{
										marginLeft: "30px",
										marginRight: "30px"
									}}
								>
									<Grid
										container
										style={{
											paddingTop: "5px",
											display: "flex",
											flexDirection: "column",
											justify: "center"
										}}
									>
										<Grid item>
											<GiTrophyCup size="2.5em" />
										</Grid>
										<Grid>
											<Typography style={{ fontSize: "14px" }}>
												Badges
											</Typography>
										</Grid>
									</Grid>
								</Button>
							</Grid>
							<Grid item xs={6} md={5}>
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
									Rank: {rank()}
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
			</Container>
		</div>
	);
};

export default WatchstatisticsSubHeader;
