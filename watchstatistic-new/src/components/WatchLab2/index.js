import React, { useState } from "react";
import Boxes from "./Boxes";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import {
	AiFillCaretUp,
	AiFillCaretLeft,
	AiFillCaretRight
} from "react-icons/ai";
import { Typography } from "@material-ui/core";

const WatchLab2 = () => {
	const [bottomMenu, setBottomMenu] = useState(false);
	const [leftMenu, setLeftMenu] = useState(false);
	const [rightMenu, setRightMenu] = useState(false);
	return (
		<div>
			<Box
				style={{
					position: "absolute",

					zIndex: "1",
					paddingLeft: "50%",
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
					<AiFillCaretUp style={{ color: "#ffffffCC" }} size="4vh" />
				</Avatar>
			</Box>
			<Box
				style={{
					position: "absolute",
					zIndex: "1",
					paddingLeft: "65%",
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
					<AiFillCaretRight style={{ color: "#ffffffCC" }} size="4vh" />
				</Avatar>
			</Box>
			<Box
				style={{
					position: "absolute",
					zIndex: "1",
					paddingLeft: "35%",
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
					<AiFillCaretLeft style={{ color: "#ffffffCC" }} size="4vh" />
				</Avatar>
			</Box>

			<Box style={{ height: "100vh" }}>
				<Boxes />
			</Box>
		</div>
	);
};

export default WatchLab2;
