import React, { useState } from "react";
import Boxes from "./Boxes";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import CentralButtons from "./CentralButtons";
import BoxInfo from "./BoxInfo";
import BoxInfo2 from "./BoxInfo2";

const WatchLab2 = () => {
	const [boxInfoMenu, setBoxInfoMenu] = useState("whiteBox");

	const configCentralButtons = {
		boxInfoMenu,
		setBoxInfoMenu
	};

	return (
		<div style={{ backgroundColor: "#C84E15" }}>
			<Box style={{ height: "100vh" }}>
				<Grid container style={{ position: "fixed", zIndex: "2" }}>
					<Grid item xs={4} justify="center">
						{boxInfoMenu === "whiteBox" && <BoxInfo />}
						{boxInfoMenu === "blueBox" && <BoxInfo2 />}
					</Grid>
					<Grid item xs={4}>
						<CentralButtons {...configCentralButtons} />
					</Grid>
					<Grid item xs={4}></Grid>
				</Grid>
				<Boxes />
			</Box>
		</div>
	);
};

export default WatchLab2;
