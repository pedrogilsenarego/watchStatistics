import React, { useState } from "react";
import Boxes from "./Boxes";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

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
			<Box style={{ height: "100vh" }}>
				<Grid container style={{ position: "fixed", zIndex: "2" }}>
					<Grid item xs={4} justify="center">
						<BoxInfo />
					</Grid>
					<Grid item xs={4}>
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
					</Grid>
					<Grid item xs={4}></Grid>
				</Grid>
				<Boxes />
			</Box>
		</div>
	);
};

export default WatchLab2;
