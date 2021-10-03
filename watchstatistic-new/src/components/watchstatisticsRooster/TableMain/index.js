import React, { useState } from "react";

import { Button, ButtonGroup } from "@material-ui/core";
//import { makeStyles } from "@material-ui/core/styles";
import MainBody from "../MainBody";
import LatestAdditions from "../LatestAdditions";
import MainUsers from "../MainUsers";

//const useStyles = makeStyles((theme) => ({}));

// eslint-disable-next-line
const TableMain = ({}) => {
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
		<div>
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
			{table === "main" && <MainBody {...configLoadedTopWatches} />}
			{table === "second" && <LatestAdditions {...configLoadedLatest} />}
			{table === "third" && <MainUsers {...configLoadedTopUsers} />}
		</div>
	);
};

export default TableMain;
