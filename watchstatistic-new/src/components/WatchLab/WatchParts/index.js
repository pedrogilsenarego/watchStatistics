import React, { useState, useRef } from "react";

import {
	Grid,
	Typography,
	Box,
	Paper,
	Button,
	ButtonGroup
} from "@material-ui/core";
const WatchParts = ({ watchParts }) => {
	const data = [
		{ title: "Available Parts", items: ["teste", "ola", 3] },
		{ title: "Fusion Machine", items: [4, 5, 6] }
	];

	const [list, setList] = useState(data);
	const [dragging, setDragging] = useState(false);
	const dragItem = useRef();
	const dragNode = useRef();

	const [openConfirmDelete, setOpenConfirmDelete] = useState(false);

	const handleDragStart = (e, params) => {
		dragItem.current = params;
		dragNode.current = e.target;
		dragNode.current.addEventListener("dragend", handleDragEnd);
		setTimeout(() => {
			setDragging(true);
		}, 0);
	};

	const handleDragEnd = () => {
		setDragging(false);
		dragNode.current.removeEventListener("dragend", handleDragEnd);
		dragItem.current = null;
		dragNode.current = null;
	};

	const handleDragEnter = (e, params) => {
		const currentItem = dragItem.current;
		if (e.target !== dragNode.current) {
			setList((oldList) => {
				let newList = JSON.parse(JSON.stringify(oldList));
				newList[params.grpI].items.splice(
					params.itemI,
					0,
					newList[currentItem.grpI].items.splice(currentItem.itemI, 1)[0]
				);
				dragItem.current = params;
				return newList;
			});
		}
	};

	const getStyles = (params) => {
		const currentItem = dragItem.current;
		if (
			currentItem.grpI === params.grpI &&
			currentItem.itemI === params.itemI
		) {
			return "#3C3939";
		}
		return "white";
	};

	return (
		<div>
			<Paper style={{ padding: "3px", backgroundColor: "#3C3939" }}>
				<Typography>Put here your parts to Build your watch</Typography>

				<ButtonGroup>
					<Button onClick={() => setOpenConfirmDelete(true)}>
						Delete Parts
					</Button>
					<Button onClick={() => setOpenConfirmDelete(false)}>Cancel</Button>
				</ButtonGroup>
				{list.map((grp, grpI) => (
					<Box
						style={{
							backgroundColor: "black",
							margin: "10px",
							padding: "10px",
							borderRadius: "5px",
							display: "flex",
							justifyContent: "center"
						}}
						key={grp.title}
						onDragEnter={
							dragging && !grp.items.length
								? (e) => {
										handleDragEnter(e, { grpI, itemI: 0 });
								  }
								: null
						}
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
										onDragEnter={
											dragging
												? (e) => {
														handleDragEnter(e, { grpI, itemI });
												  }
												: null
										}
										draggable={true}
										key={item}
										style={{
											cursor: "pointer",
											backgroundColor: dragging
												? getStyles({ grpI, itemI })
												: "white",
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
