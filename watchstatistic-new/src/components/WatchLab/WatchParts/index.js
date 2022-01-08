import React, { useState, useEffect, useRef } from "react";
import { TiDelete } from "react-icons/ti";
import { Grid, Typography, Box, Paper, Button } from "@material-ui/core";
import LinearProgress, {
	linearProgressClasses
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
const WatchParts = ({ data, handleDeleteWatchParts }) => {
	const [list, setList] = useState(data);
	const [dragging, setDragging] = useState(false);
	const [openConfirmDelete, setOpenConfirmDelete] = useState(false);

	const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
		height: 20,
		width: 100,
		borderRadius: 5,
		[`&.${linearProgressClasses.colorPrimary}`]: {
			backgroundColor: LinearProgressBarColor2(shredderMeter(list[2].items))
		},
		[`& .${linearProgressClasses.bar}`]: {
			borderRadius: 5,
			backgroundColor: LinearProgressBarColor(shredderMeter(list[2].items))
		}
	}));
	const shredderMeter = (data) => {
		var a = 0;
		for (var i = 0; i < data.length; i++) {
			a = a + 1 + parseInt(data[i][0]);
		}
		return a;
	};
	const LinearProgressBarFormat = (value) => {
		if (value < 2) return value * 50;
		if (value < 4) return (value - 1) * 20;
		if (value < 7) return (value - 3) * 34;
		if (value < 10) return (value - 6) * 34;
		if (value < 14) return (value - 9) * 25;
		if (value < 18) return (value - 13) * 25;
		if (value < 22) return (value - 17) * 25;
		if (value < 27) return (value - 21) * 20;
		if (value < 33) return (value - 26) * 17;
	};

	const LinearProgressBarColor = (value) => {
		if (value < 2) return "grey";
		if (value < 4) return "white";
		if (value < 7) return "lightGreen";
		if (value < 10) return "darkGreen";
		if (value < 14) return "lightBlue";
		if (value < 18) return "darkBlue";
		if (value < 22) return "purple";
		if (value < 27) return "orange";
		if (value < 33) return "red";
	};

	const LinearProgressBarColor2 = (value) => {
		if (value < 2) return "black";
		if (value < 4) return "grey";
		if (value < 7) return "white";
		if (value < 10) return "lightGreen";
		if (value < 14) return "darkGreen";
		if (value < 18) return "lightBlue";
		if (value < 22) return "darkBlue";
		if (value < 27) return "purple";
		if (value < 33) return "orange";
	};

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
				localStorage.setItem("List", JSON.stringify(newList));
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
		return colorWatchParts(item.item);
	};

	const colorWatchParts = (watchParts) => {
		let newArray = watchParts;
		let color = newArray[0];
		if (color === "0") return "#ffffff66";
		if (color === "1") return "#ffffff";
		if (color === "2") return "lightGreen";
		if (color === "3") return "darkGreen";
		if (color === "4") return "lightBlue";
		if (color === "5") return "darkBlue";
		if (color === "6") return "purple";
		if (color === "7") return "orange";
		if (color === "8") return "red";
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
											key={item.id}
											style={{
												cursor: "pointer",
												backgroundColor: dragging
													? getStyles({ grpI, itemI, item })
													: colorWatchParts(item),
												margin: "5px",
												padding: "5px",
												borderRadius: "3px",
												display: "flex",
												justifyContent: "center"
											}}
										>
											<Typography style={{ color: "#3C3939" }}>
												{item.toString().slice(1)}
											</Typography>
										</Box>
									))}
								</Grid>
							</Grid>
						</Box>
					))}
					{list[2].items.length > 0 && (
						<Typography style={{ color: "orange" }}>
							Shredded Parts are gone!
						</Typography>
					)}
					<Typography>New part that will be obtained:</Typography>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							paddingTop: "5px"
						}}
					>
						<BorderLinearProgress
							variant="determinate"
							value={LinearProgressBarFormat(shredderMeter(list[2].items))}
						/>
					</Box>
					{!openConfirmDelete && (
						<Button
							onClick={() => {
								setOpenConfirmDelete(true);
							}}
						>
							<TiDelete color="red" fontSize="3.5em" />
							Delete Parts
						</Button>
					)}
					{openConfirmDelete && (
						<Button
							onClick={() => {
								setOpenConfirmDelete(false);
								handleDeleteWatchParts(
									list[2].items,
									LinearProgressBarColor(shredderMeter(list[2].items)),
									LinearProgressBarFormat(shredderMeter(list[2].items)),
									LinearProgressBarColor2(shredderMeter(list[2].items))
								);
							}}
						>
							<TiDelete color="red" fontSize="3.5em" />
							I, Confirm
						</Button>
					)}
				</Paper>
			</div>
		);
	}
};
export default WatchParts;
