import React from "react";

import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

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
		<Container
			justify="center"
			style={{
				paddingTop: "4vh",
				position: "fixed"
			}}
		>
			<Paper style={{ background: "#0000001C", width: "25%", padding: "20px" }}>
				<Typography style={{ color: "#ffffffBF", marginTop: "10px" }}>
					<BsFillInboxFill size="3vh" color="white" />{" "}
					{currentUser.collection ? currentUser.collection.length : 0}/
					{bagSize()} <GiGears size="3vh" color="white" /> {itemsBag().length}/
					{bagSize()} <GoRocket size="3vh" color="white" />{" "}
					{currentUser.boosters ? currentUser.boosters : 0}
				</Typography>

				<Divider
					style={{
						marginTop: "8px",
						background: "#ffffff66"
					}}
				/>
				<Typography style={{ color: "#ffffffBF", marginTop: "10px" }}>
					<FaCoins size="3vh" color="orange" />{" "}
					{currentUser.points ? currentUser.points : 0}
					{"  "}
					<FaPuzzlePiece size="3vh" color="lightBlue" /> {blueBoxFragments()}
					{"  "}
					<FaPuzzlePiece size="3vh" color="purple" /> {purpleBoxFragments()}
					{"  "}
					<FaPuzzlePiece size="3vh" color="red" /> {orangeBoxFragments()}
				</Typography>
				<Divider
					style={{
						marginTop: "8px",
						background: "#ffffff66"
					}}
				/>
				<Typography style={{ color: "#ffffffBF", marginTop: "10px" }}>
					<AiOutlineCodeSandbox size="3vh" color="white" /> {whiteBoxes()}
					{"  "}
					<AiOutlineCodeSandbox size="3vh" color="lightBlue" /> {BlueBoxes()}
					{"  "}
					<AiOutlineCodeSandbox size="3vh" color="purple" /> 0{"  "}
					<AiOutlineCodeSandbox size="3vh" color="red" /> 0
				</Typography>
			</Paper>
		</Container>
	);
};

export default Currencies;
