import React, { useState, useEffect, useRef } from "react";

import { Grid, Typography, Box, Paper } from "@material-ui/core";
const WatchParts = ({ data }) => {
	const [list, setList] = useState(data);
	const [dragging, setDragging] = useState(false);

	useEffect(() => {
		setList(data);
	}, [setList, data]);

	const dragItem = useRef();
	const dragItemNode = useRef();

	const handleDragStart = (e, item) => {
		dragItemNode.current = e.target;
		dragItemNode.current.addEventListener("dragend", handleDragEnd);
		dragItem.current = item;

		setTimeout(() => {
			setDragging(true);
		}, 0);
	};

	const handleDragEnd = (e) => {
		setDragging(false);
		dragItem.current = null;
		dragItemNode.current.removeEventListener("dragend", handleDragEnd);
		dragItemNode.current = null;
	};

	const handleDragEnter = (e, targetItem) => {
		if (dragItemNode.current !== e.target) {
			setList((oldList) => {
				let newList = JSON.parse(JSON.stringify(oldList));
				newList[targetItem.grpI].items.splice(
					targetItem.itemI,
					0,
					newList[dragItem.current.grpI].items.splice(
						dragItem.current.itemI,
						1
					)[0]
				);
				dragItem.current = targetItem;
				return newList;
			});
		}
	};

	const getStyles = (item) => {
		if (
			dragItem.current.grpI === item.grpI &&
			dragItem.current.itemI === item.itemI
		) {
			return "#3C3939";
		}
		return "white";
	};

	if (list) {
		return (
			<div>
				<Paper style={{ padding: "3px", backgroundColor: "#3C3939" }}>
					<Typography>Put here your parts to Build your watch</Typography>

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
									? (e) => handleDragEnter(e, { grpI, itemI: 0 })
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
													? (e) => handleDragEnter(e, { grpI, itemI })
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
											<Typography style={{ color: "#3C3939" }}>
												{item}
											</Typography>
										</Box>
									))}
								</Grid>
							</Grid>
						</Box>
					))}
				</Paper>
			</div>
		);
	}
};
export default WatchParts;
