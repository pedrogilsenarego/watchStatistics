import React, { useState } from "react";

import { Button, ButtonGroup, Grid, Box } from "@material-ui/core";
//import { makeStyles } from "@material-ui/core/styles";
import MainBody from "../MainBody";
import LatestAdditions from "../LatestAdditions";
import MainUsers from "../MainUsers";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	subHeaderBox2: {
		height: "10vh",
		background: "#145875",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center"
	}
}));

// eslint-disable-next-line
const TableMain = ({ currentUser }) => {
	const classes = useStyles();
	const [table, setTable] = useState("main");
	const [loadedLatest, setLoadedLatest] = useState(false);
	const [loadedTopWatches, setLoadedTopWatches] = useState(false);
	const [loadedTopUsers, setLoadedTopUsers] = useState(false);

	const handleLoadedLatest = () => {
		setLoadedLatest(true);
	};

	const configLoadedLatest = {
		handleLoadedLatest,
		loadedLatest
	};

	const handleLoadedTopWatches = () => {
		setLoadedTopWatches(true);
	};

	const configLoadedTopWatches = {
		handleLoadedTopWatches,
		loadedTopWatches
	};

	const handleLoadedTopUsers = () => {
		setLoadedTopUsers(true);
	};

	const configLoadedTopUsers = {
		handleLoadedTopUsers,
		loadedTopUsers
	};

	return (
		<Box>
			<Box className={classes.subHeaderBox2}>
				<Grid container style={{ paddingLeft: "20px" }}>
					<ButtonGroup>
						<Button
							style={{ color: table === "main" ? "white" : "#ffffffB3" }}
							onClick={(e) => {
								setTable("main");
							}}
						>
							Top Watches
						</Button>
						<Button
							style={{ color: table === "second" ? "white" : "#ffffffB3" }}
							onClick={(e) => {
								setTable("second");
							}}
						>
							Latest Additions
						</Button>
						<Button
							style={{ color: table === "third" ? "white" : "#ffffffB3" }}
							onClick={(e) => {
								setTable("third");
							}}
						>
							Top Users
						</Button>
					</ButtonGroup>
				</Grid>
			</Box>
			{table === "main" && <MainBody {...configLoadedTopWatches} />}
			{table === "second" && <LatestAdditions {...configLoadedLatest} />}
			{table === "third" && <MainUsers {...configLoadedTopUsers} />}
		</Box>
	);
};

export default TableMain;
