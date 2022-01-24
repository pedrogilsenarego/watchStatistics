import React, { useState } from "react";
import Slider from "./Slider";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import CentralButtons from "./CentralButtons";
import BoxInfo from "./BoxInfo";
import BoxInfo2 from "./BoxInfo2";
import Currencies from "./Currencies";

const WatchLab2 = () => {
	const [boxInfoMenu, setBoxInfoMenu] = useState("whiteBox");
	const [x, setX] = useState(0);

	const configCentralButtons = {
		boxInfoMenu,
		setBoxInfoMenu,
		setX,
		x
	};

	const configSlider = {
		x
	};

	return (
		<div style={{ backgroundColor: "#8686af" }}>
			<Box style={{ height: "100vh" }}>
				<Grid container style={{ position: "fixed", zIndex: "2" }}>
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
		</div>
	);
};

export default WatchLab2;
// #C84E15
