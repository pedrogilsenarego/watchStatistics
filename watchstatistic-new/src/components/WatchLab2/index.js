import React, { useState } from "react";
import Boxes from "./Boxes";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";

import {
	AiFillCaretUp,
	AiFillCaretLeft,
	AiFillCaretRight
} from "react-icons/ai";
import Typography from "@mui/material/Typography";

const WatchLab2 = () => {
	const [bottomMenu, setBottomMenu] = useState(false);
	const [leftMenu, setLeftMenu] = useState(false);
	const [rightMenu, setRightMenu] = useState(false);
	return (
		<div style={{ backgroundColor: "#f15946" }}>
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
			<Container
				style={{
					position: "absolute",

					zIndex: "1",
					paddingLeft: "2%",
					paddingTop: "20vh"
				}}
			>
				<Paper
					style={{ background: "#0000001C", width: "350px", padding: "20px" }}
				>
					<Typography variant="h5" style={{ color: "#ffffffE6" }}>
						White box
					</Typography>
					<Divider
						style={{
							width: "100%",
							marginTop: "3px",
							background: "#ffffff66"
						}}
					/>
					<Typography style={{ color: "#ffffffBF" }}>
						Grey Watch Part
					</Typography>
					<Typography style={{ color: "#ffffffBF" }}>
						20% Chance of a White Watch Part
					</Typography>
					<Typography style={{ color: "#ffffffBF" }}>
						1% Chance of a Light Green Part
					</Typography>
					<Typography style={{ color: "#ffffffBF" }}>
						1-3 Fragments of Blue Box
					</Typography>
					<Typography style={{ color: "#ffffffBF" }}>
						5% Chance of Fragment of Purple Box
					</Typography>
				</Paper>
			</Container>
			<Box style={{ height: "100vh", zIndex: "3" }}>
				<Boxes />
			</Box>
		</div>
	);
};

export default WatchLab2;
