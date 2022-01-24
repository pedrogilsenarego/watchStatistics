import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import {
	AiFillCaretUp,
	AiFillCaretLeft,
	AiFillCaretRight
} from "react-icons/ai";
import Box from "@mui/material/Box";
const CentralButtons = ({ boxInfoMenu, setBoxInfoMenu }) => {
	const [bottomMenu, setBottomMenu] = useState(false);
	const [leftMenu, setLeftMenu] = useState(false);
	const [rightMenu, setRightMenu] = useState(false);
	function whichInfoMenu(button, boxInfoMenu) {
		if (button === "rightButton") {
			if (boxInfoMenu === "whiteBox") return "blueBox";
			if (boxInfoMenu === "blueBox") return "blueBox";
		}
		if (button === "leftButton") {
			if (boxInfoMenu === "blueBox") return "whiteBox";
			if (boxInfoMenu === "whiteBox") return "whiteBox";
		}
	}

	return (
		<div>
			{" "}
			<Box
				style={{
					paddingTop: "43vh",
					display: "flex",
					justifyContent: "space-between"
				}}
			>
				<Avatar
					onMouseEnter={() => {
						setLeftMenu(true);
					}}
					onMouseLeave={() => {
						setLeftMenu(false);
					}}
					onClick={() =>
						setBoxInfoMenu(whichInfoMenu("leftButton", boxInfoMenu))
					}
					style={{
						cursor: "pointer",
						backgroundColor:
							leftMenu && boxInfoMenu !== "whiteBox" ? "#00000066" : "#00000026"
					}}
				>
					<AiFillCaretLeft
						style={{ color: "#ffffffCC", paddingRight: "2px" }}
						size="4vh"
					/>
				</Avatar>
				<Avatar
					onMouseEnter={() => {
						setRightMenu(true);
					}}
					onMouseLeave={() => {
						setRightMenu(false);
					}}
					onClick={() =>
						setBoxInfoMenu(whichInfoMenu("rightButton", boxInfoMenu))
					}
					style={{
						cursor: "pointer",
						backgroundColor:
							rightMenu && boxInfoMenu !== "blueBox" ? "#00000066" : "#00000026"
					}}
				>
					<AiFillCaretRight
						style={{ color: "#ffffffCC", paddingLeft: "2px" }}
						size="4vh"
					/>
				</Avatar>
			</Box>
			<Box
				style={{
					paddingTop: "35vh",
					display: "flex",

					justifyContent: "center"
				}}
			>
				<Avatar
					onMouseEnter={() => {
						setBottomMenu(true);
					}}
					onMouseLeave={() => {
						setBottomMenu(false);
					}}
					style={{
						cursor: "pointer",
						backgroundColor: bottomMenu ? "#00000066" : "#00000026"
					}}
				>
					<AiFillCaretUp
						style={{ color: "#ffffffCC", paddingBottom: "2px" }}
						size="4vh"
					/>
				</Avatar>
			</Box>
		</div>
	);
};

export default CentralButtons;
