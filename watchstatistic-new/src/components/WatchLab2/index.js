import React, { useState } from "react";
import Boxes from "./Boxes";
import Box from "@mui/material/Box";

import Avatar from "@mui/material/Avatar";

import BoxInfo from "./BoxInfo";
import {
	AiFillCaretUp,
	AiFillCaretLeft,
	AiFillCaretRight
} from "react-icons/ai";

const WatchLab2 = () => {
	const [bottomMenu, setBottomMenu] = useState(false);
	const [leftMenu, setLeftMenu] = useState(false);
	const [rightMenu, setRightMenu] = useState(false);
	return (
		<div style={{ backgroundColor: "#C84E15" }}>
			<Box
				style={{
					position: "absolute",

					zIndex: "2",
					paddingLeft: "48.5%",
					paddingTop: "90vh"
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
			<Box
				style={{
					position: "absolute",
					zIndex: "2",
					paddingLeft: "63.5%",
					paddingTop: "40vh"
				}}
			>
				<Avatar
					onMouseEnter={() => {
						setRightMenu(true);
					}}
					onMouseLeave={() => {
						setRightMenu(false);
					}}
					style={{
						cursor: "pointer",
						backgroundColor: rightMenu ? "#00000066" : "#00000026"
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
					position: "absolute",
					zIndex: "2",
					paddingLeft: "33.5%",
					paddingTop: "40vh"
				}}
			>
				<Avatar
					onMouseEnter={() => {
						setLeftMenu(true);
					}}
					onMouseLeave={() => {
						setLeftMenu(false);
					}}
					style={{
						cursor: "pointer",
						backgroundColor: leftMenu ? "#00000066" : "#00000026"
					}}
				>
					<AiFillCaretLeft
						style={{ color: "#ffffffCC", paddingRight: "2px" }}
						size="4vh"
					/>
				</Avatar>
			</Box>
			<Box>
				<BoxInfo />
			</Box>

			<Box>
				<Boxes />
			</Box>
		</div>
	);
};

export default WatchLab2;
