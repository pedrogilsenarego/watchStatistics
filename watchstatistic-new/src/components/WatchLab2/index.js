import React, { useState, useEffect } from "react";
import Slider from "./Slider";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import CentralButtons from "./CentralButtons";
import BoxInfo from "./BoxInfo";
import BoxInfo2 from "./BoxInfo2";
import Currencies from "./Currencies";
import WatchParts from "./WatchParts";

const mapState = (state) => ({
	currentUser: state.user.currentUser
});

const WatchLab2 = () => {
	const [boxInfoMenu, setBoxInfoMenu] = useState("whiteBox");
	const [x, setX] = useState(0);
	const [bagFull, setBagFull] = useState(false);
	const [collectionFull, setCollectionFull] = useState(false);
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

	useEffect(
		() => {
			if (
				currentUser.watchParts &&
				currentUser.watchParts.length >= bagSize()
			) {
				setBagFull(true);
			} else setBagFull(false);
		},
		// eslint-disable-next-line
		[currentUser.watchParts]
	);

	useEffect(
		() => {
			if (
				currentUser.collection &&
				currentUser.collection.length >= bagSize()
			) {
				setCollectionFull(true);
			} else setCollectionFull(false);
		},
		// eslint-disable-next-line
		[currentUser.collection]
	);

	const data = [
		{
			title: "Available Parts",
			items: currentUser.watchParts ? currentUser.watchParts : []
		},
		{ title: "Fusion Machine", items: [] },
		{ title: "Parts Shreder", items: [] }
	];

	const configCentralButtons = {
		boxInfoMenu,
		setBoxInfoMenu,
		setX,
		x
	};

	const configSlider = {
		x
	};

	const configWatchParts = {
		data,
		bagFull,
		collectionFull,
		setBagFull
	};

	return (
		<div>
			<Box style={{ height: "100vh", backgroundColor: "#8686af" }}>
				<Grid container style={{ position: "absolute", zIndex: "2" }}>
					<Grid item xs={4} justify="center">
						{boxInfoMenu === "whiteBox" && <BoxInfo />}
						{boxInfoMenu === "blueBox" && <BoxInfo2 />}

						<Currencies />
					</Grid>
					<Grid item xs={4}>
						<CentralButtons {...configCentralButtons} />
					</Grid>
					<Grid item xs={4}></Grid>
				</Grid>
				<Slider {...configSlider} />
			</Box>

			<Box style={{ height: "100vh", backgroundColor: "black" }}>
				<Grid container>
					<Grid item xs={6}></Grid>
					<Grid item xs={6}>
						<WatchParts {...configWatchParts} />
					</Grid>
				</Grid>
			</Box>
		</div>
	);
};

export default WatchLab2;
// #C84E15
