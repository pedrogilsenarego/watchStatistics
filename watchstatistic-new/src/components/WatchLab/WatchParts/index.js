import React, { useState, useRef } from "react";
import { Grid, Typography, Box, Paper } from "@material-ui/core";

const data = [
	{ title: "Available Parts", items: [1, 2, 3] },
	{ title: "Fusion Machine", items: [4, 5, 6] }
];

const WatchParts = () => {
	const [list, setList] = useState(data);
	const [dragging, setDragging] = useState(false);
	const dragItem = useRef();
	const dragNode = useRef();

	const handleDragStart = (e, params) => {
		console.log("dragging", params);
		dragItem.current = params;
		dragNode.current = e.target;
		dragNode.current.addEventListener("dragend", handleDragEnd);
		setTimeout(() => {
			setDragging(true);
		}, 0);
	};

	const handleDragEnd = () => {
		console.log("draging end..");
		setDragging(false);
		dragNode.current.removeEventListener("dragend", handleDragEnd);
		dragItem.current = null;
		dragNode.current = null;
	};

	const getStyles = (params) => {
		const currentItem = dragItem.current;
		if (
			currentItem.grpI === params.grpI &&
			currentItem.itemI === params.itemI
		) {
			return "#3C3939";
		}
		return "lightGrey";
	};

	return (
		<div>
			<Typography>Test</Typography>
			<Paper style={{ padding: "10px" }}>
				{list.map((grp, grpI) => (
					<Box
						style={{
							backgroundColor: "#3C3939",
							margin: "10px",
							padding: "10px",
							borderRadius: "5px",
							display: "flex",
							justifyContent: "center"
						}}
						key={grp.title}
					>
						<Grid container>
							<Grid xs={12}>
								<Typography>{grp.title}</Typography>
							</Grid>
							<Grid xs={12}>
								{grp.items.map((item, itemI) => (
									<Box
										onDragStart={(e) => {
											handleDragStart(e, { grpI, itemI });
										}}
										draggable={true}
										key={item}
										style={{
											cursor: "pointer",
											backgroundColor: dragging
												? getStyles({ grpI, itemI })
												: "lightGrey",
											margin: "5px",
											padding: "5px",
											borderRadius: "3px"
										}}
									>
										<Typography style={{ color: "#3C3939" }}>{item}</Typography>
									</Box>
								))}
							</Grid>
						</Grid>
					</Box>
				))}
			</Paper>
		</div>
	);
};
export default WatchParts;
