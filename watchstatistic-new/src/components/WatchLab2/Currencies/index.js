import React from "react";

import Paper from "@mui/material/Paper";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { BsFillInboxFill } from "react-icons/bs";
import { FaCoins } from "react-icons/fa";
import { FaPuzzlePiece } from "react-icons/fa";
import { GiGears } from "react-icons/gi";
import { GoRocket } from "react-icons/go";
import { AiOutlineCodeSandbox } from "react-icons/ai";

const mapState = (state) => ({
	currentUser: state.user.currentUser
});

const Currencies = () => {
	const { currentUser } = useSelector(mapState);

	const bagSize = () => {
		if (currentUser.experience < 20) return 10;
		if (currentUser.experience < 100) return 12;
		if (currentUser.experience < 200) return 14;
		if (currentUser.experience < 500) return 16;
		if (currentUser.experience < 1500) return 18;
		if (currentUser.experience < 5000) return 20;
		else return 15;
	};

	const itemsBag = () => {
		if (!currentUser.watchParts) return "";
		else return currentUser.watchParts;
	};

	const whiteBoxes = () => {
		if (!currentUser.whiteBox) return 0;
		else return currentUser.whiteBox;
	};

	const BlueBoxes = () => {
		if (!currentUser.blueBox) return 0;
		else return currentUser.blueBox;
	};

	const PurpleBoxes = () => {
		if (!currentUser.purpleBox) return 0;
		else return currentUser.purpleBox;
	};

	const blueBoxFragments = () => {
		if (!currentUser.blueBoxFragments) return 0;
		else return currentUser.blueBoxFragments;
	};

	const purpleBoxFragments = () => {
		if (!currentUser.purpleBoxFragments) return 0;
		else return currentUser.purpleBoxFragments;
	};

	const orangeBoxFragments = () => {
		if (!currentUser.orangeBoxFragments) return 0;
		else return currentUser.orangeBoxFragments;
	};
	return (
		<Grid container direction="column" alignItems="center">
			<Paper
				style={{
					background: "#0000001C",
					position: "fixed",

					marginTop: "91vh",
					padding: "10px",
					paddingRight: "10px",
					display: "flex",
					alignItems: "center"
				}}
			>
				<Typography style={{ color: "#ffffffBF" }}>
					<BsFillInboxFill size="3vh" color="white" />{" "}
					{currentUser.collection ? currentUser.collection.length : 0}/
					{bagSize()}{" "}
					<GiGears style={{ marginLeft: "5px" }} size="3vh" color="white" />{" "}
					{itemsBag().length}/{bagSize()} {"     "}{" "}
					<GoRocket style={{ marginLeft: "5px" }} size="3vh" color="white" />{" "}
					{currentUser.boosters ? currentUser.boosters : 0}
				</Typography>

				<Typography style={{ color: "#ffffffBF", paddingLeft: "30px" }}>
					<FaCoins size="3vh" color="orange" />{" "}
					{currentUser.points ? currentUser.points : 0}
					{"  "}
					<FaPuzzlePiece
						style={{ marginLeft: "5px" }}
						size="3vh"
						color="lightBlue"
					/>{" "}
					{blueBoxFragments()}
					{"  "}
					<FaPuzzlePiece
						style={{ marginLeft: "5px" }}
						size="3vh"
						color="purple"
					/>{" "}
					{purpleBoxFragments()}
					{"  "}
					<FaPuzzlePiece
						style={{ marginLeft: "5px" }}
						size="3vh"
						color="red"
					/>{" "}
					{orangeBoxFragments()}
				</Typography>

				<Typography style={{ color: "#ffffffBF", paddingLeft: "30px" }}>
					<AiOutlineCodeSandbox size="3vh" color="white" /> {whiteBoxes()}
					{"  "}
					<AiOutlineCodeSandbox
						style={{ marginLeft: "5px" }}
						size="3vh"
						color="lightBlue"
					/>{" "}
					{BlueBoxes()}
					{"  "}
					<AiOutlineCodeSandbox
						style={{ marginLeft: "5px" }}
						size="3vh"
						color="purple"
					/>{" "}
					{PurpleBoxes()}
					{"  "}
					<AiOutlineCodeSandbox
						style={{ marginLeft: "5px" }}
						size="3vh"
						color="red"
					/>{" "}
					0
				</Typography>
			</Paper>
		</Grid>
	);
};

export default Currencies;
