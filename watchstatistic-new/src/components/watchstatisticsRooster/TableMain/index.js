import React, { useState } from "react";

import { Button, ButtonGroup, Grid, Box } from "@material-ui/core";
//import { makeStyles } from "@material-ui/core/styles";
import MainBody from "../MainBody";
import LatestAdditions from "../LatestAdditions";
import MainUsers from "../MainUsers";

//const useStyles = makeStyles((theme) => ({}));

// eslint-disable-next-line
const TableMain = ({ currentUser }) => {
	//const classes = useStyles();
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
			<Grid container justify="center" style={{ paddingTop: "10px" }}>
				<ButtonGroup>
					<Button
						onClick={(e) => {
							setTable("main");
						}}
					>
						Top Watches
					</Button>
					<Button
						onClick={(e) => {
							setTable("second");
						}}
					>
						Latest Additions
					</Button>
					<Button
						onClick={(e) => {
							setTable("third");
						}}
					>
						Top Users
					</Button>
				</ButtonGroup>
			</Grid>
			{table === "main" && <MainBody {...configLoadedTopWatches} />}
			{table === "second" && <LatestAdditions {...configLoadedLatest} />}
			{table === "third" && <MainUsers {...configLoadedTopUsers} />}
		</Box>
	);
};

export default TableMain;
