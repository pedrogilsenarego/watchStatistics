import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import WatchParts from "./WatchParts";
import { useHistory } from "react-router";
import Boosters from "./Boosters";
import {
	Grid,
	Typography,
	Box,
	Paper,
	Button,
	ButtonGroup,
	Menu,
	MenuItem
} from "@material-ui/core";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { updateBoxStatus } from "../../redux/User/user.actions";
import { makeStyles } from "@material-ui/core/styles";
import Popup from "../controls/Popup";

const mapState = (state) => ({
	currentUser: state.user.currentUser
});

const useStyles = makeStyles((theme) => ({
	menu: {
		marginTop: "70px",
		"& .MuiPaper-root": {
			backgroundColor: "#04040680",
			color: "#ffffff",
			disableScrollLock: true,

			[theme.breakpoints.up(750)]: {
				maxWidth: "1000px"
			}
		}
	}
}));

const WatchLab = () => {
	const dispatch = useDispatch();
	const classes = useStyles();
	const history = useHistory();
	const [openBoxPopUp, setOpenBoxPopUp] = useState(false);
	const [collectionFull, setCollectionFull] = useState(false);
	const [bagFull, setBagFull] = useState(false);
	const [popUpInf, setPopUpInfo] = useState(null);
	const [viewBoosters, setViewBoosters] = useState(null);
	const [helperDescription, setHelperDescription] = useState(false);
	const [helperDescriptionBlue, setHelperDescriptionBlue] = useState(false);

	const { currentUser } = useSelector(mapState);

	const data = [
		{
			title: "Available Parts",
			items: currentUser.watchParts ? currentUser.watchParts : []
		},
		{ title: "Fusion Machine", items: [] },
		{ title: "Parts Shreder", items: [] }
	];

	useEffect(
		() => {
			if (
				currentUser.watchParts &&
				currentUser.watchParts.length >= bagSize()
			) {
				setBagFull(true);
			} else setBagFull(false);
		},
		// eslint-disable-next-line
		[currentUser.watchParts]
	);

	useEffect(
		() => {
			if (
				currentUser.collection &&
				currentUser.collection.length >= bagSize()
			) {
				setCollectionFull(true);
			} else setCollectionFull(false);
		},
		// eslint-disable-next-line
		[currentUser.collection]
	);

	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function percentageLoot(percentage) {
		if (getRandomInt(1, 100) <= percentage) return 1;
		else return 0;
	}

	function getRandomWatchPart() {
		const a = getRandomInt(1, 5);
		if (a === 1) return "Case";
		if (a === 2) return "Movement";
		if (a === 3) return "Crown";
		if (a === 4) return "Glass";
		if (a === 5) return "Bracelet";
	}

	function getRandomPart(color) {
		const a = getRandomWatchPart();
		if (color === "grey") {
			return "0" + a;
		}
		if (color === "white") {
			return "1" + a;
		}
		if (color === "lightGreen") {
			return "2" + a;
		}
		if (color === "darkGreen") {
			return "3" + a;
		}
		if (color === "lightBlue") {
			return "4" + a;
		}
		if (color === "darkBlue") {
			return "5" + a;
		}
		if (color === "purple") {
			return "6" + a;
		}
		if (color === "orange") {
			return "7" + a;
		}
		if (color === "red") {
			return "8" + a;
		}
	}

	const bagSize = () => {
		if (currentUser.experience < 20) return 10;
		if (currentUser.experience < 100) return 12;
		if (currentUser.experience < 200) return 14;
		if (currentUser.experience < 500) return 16;
		if (currentUser.experience < 1500) return 18;
		if (currentUser.experience < 5000) return 20;
		else return 15;
	};

	const itemsBag = () => {
		if (!currentUser.watchParts) return "";
		else return currentUser.watchParts;
	};

	const itemsBagDeleted = (pos) => {
		var a = currentUser.watchParts;
		for (var i = 0; i < pos.length; i++) {
			a.splice(a.indexOf(pos[i]), 1);
		}
		return a;
	};

	const whiteBoxes = () => {
		if (!currentUser.whiteBox) return 0;
		else return currentUser.whiteBox;
	};

	const BlueBoxes = () => {
		if (!currentUser.blueBox) return 0;
		else return currentUser.blueBox;
	};

	const blueBoxFragments = () => {
		if (!currentUser.blueBoxFragments) return 0;
		else return currentUser.blueBoxFragments;
	};

	const purpleBoxFragments = () => {
		if (!currentUser.purpleBoxFragments) return 0;
		else return currentUser.purpleBoxFragments;
	};

	const orangeBoxFragments = () => {
		if (!currentUser.orangeBoxFragments) return 0;
		else return currentUser.orangeBoxFragments;
	};

	const handleGetWhiteBox = () => {
		const configData = {
			...currentUser,
			flag: "getWhitebox",
			points: currentUser.points - 4,
			whiteBox: whiteBoxes() + 1,
			userID: currentUser.id
		};
		dispatch(updateBoxStatus(configData));
	};

	const handleGetBlueBox = () => {
		const configData = {
			...currentUser,
			flag: "getBluebox",
			blueBoxFragments: currentUser.blueBoxFragments - 10,
			blueBox: BlueBoxes() + 1,
			userID: currentUser.id
		};
		dispatch(updateBoxStatus(configData));
	};

	const whiteboxDisabled = () => {
		if (!currentUser.points || currentUser.points < 4) {
			return true;
		} else return false;
	};

	const blueboxDisabled = () => {
		if (!currentUser.blueBoxFragments || currentUser.blueBoxFragments < 10) {
			return true;
		} else return false;
	};

	const handleOpenWhiteBox = () => {
		const a = [getRandomPart("grey")];

		if (percentageLoot(20) === 1) {
			a.push(getRandomPart("white"));
		}
		if (percentageLoot(1) === 1) {
			a.push(getRandomPart("lightGreen"));
		}
		let b = [...a];
		var c = b.map((s) => s.slice(1));

		if (currentUser.watchParts) {
			a.unshift(...itemsBag());
		}
		const configData = {
			...currentUser,
			flag: "openWhitebox",
			whiteBox: whiteBoxes() - 1,
			blueBoxFragments: blueBoxFragments() + getRandomInt(1, 3),
			purpleBoxFragments: purpleBoxFragments() + percentageLoot(5),
			watchParts: a,
			userID: currentUser.id
		};
		dispatch(updateBoxStatus(configData));
		setOpenBoxPopUp(true);
		setPopUpInfo(
			"You just received: " +
				Number(configData.blueBoxFragments - blueBoxFragments()) +
				" Blue Box Fragments, " +
				Number(configData.purpleBoxFragments - purpleBoxFragments()) +
				" Purple Box Fragments, " +
				c
		);
	};

	const handleOpenBlueBox = () => {
		const a = [getRandomPart("white")];
		if (percentageLoot(20) === 1) {
			a.push(getRandomPart("lightGreen"));
		}
		if (percentageLoot(1) === 1) {
			a.push(getRandomPart("darkGreen"));
		}
		let b = [...a];
		var c = b.map((s) => s.slice(1));

		if (currentUser.watchParts) {
			a.unshift(...itemsBag());
		}
		const configData = {
			...currentUser,
			flag: "openBluebox",
			blueBox: BlueBoxes() - 1,
			purpleBoxFragments: purpleBoxFragments() + getRandomInt(1, 3),
			orangeBoxFragments: orangeBoxFragments() + percentageLoot(5),
			watchParts: a,
			userID: currentUser.id
		};
		dispatch(updateBoxStatus(configData));
		setOpenBoxPopUp(true);
		setPopUpInfo(
			"You just received: " +
				Number(configData.purpleBoxFragments - purpleBoxFragments()) +
				" Purple Box Fragments, " +
				Number(configData.orangeBoxFragments - orangeBoxFragments()) +
				" Orange Box Fragments, " +
				c
		);
	};

	const whiteboxDisabled2 = () => {
		if (
			!currentUser.whiteBox ||
			currentUser.whiteBox < 1 ||
			(currentUser.watchParts && currentUser.watchParts.length >= bagSize())
		) {
			return true;
		} else return false;
	};

	const blueboxDisabled2 = () => {
		if (
			!currentUser.blueBox ||
			currentUser.blueBox < 1 ||
			(currentUser.watchParts && currentUser.watchParts.length >= bagSize())
		) {
			return true;
		} else return false;
	};

	const handleCloseWhiteBoxesMenu = () => {
		setHelperDescription(false);
	};

	const handleCloseBlueBoxesMenu = () => {
		setHelperDescriptionBlue(false);
	};

	const handleDeleteWatchParts = (pos, color, percentage, color2) => {
		const a = itemsBagDeleted(pos);

		if (percentage && color && percentageLoot(percentage) === 1) {
			const b = getRandomPart(color);
			a.push(b);
		} else {
			if (color2 && color2 !== "black") {
				const b = getRandomPart(color2);
				a.push(b);
			}
		}

		const configData = {
			...currentUser,
			flag: "deleteWatchPart",
			watchParts: a,
			userID: currentUser.id
		};
		dispatch(updateBoxStatus(configData));
		setBagFull(false);
	};

	const configWatchParts = {
		data,
		handleDeleteWatchParts,
		currentUser,
		collectionFull
	};

	return (
		<div>
			<Grid container justify="center">
				<Paper style={{ width: "90vw", background: "#196B91" }}>
					<Grid container style={{ padding: "20px" }}>
						<Grid item xs={12}>
							<Typography variant="h5">
								User your Goodies to build your watch collection
							</Typography>
							<Typography
								onClick={() => {
									history.push("/mycollection");
								}}
								style={{ marginTop: "20px", cursor: "pointer" }}
							>
								Collection size:{" "}
								{currentUser.collection ? currentUser.collection.length : 0}/
								{bagSize()}
							</Typography>
							<Typography style={{ marginTop: "5px" }}>
								Current Points: {currentUser.points ? currentUser.points : 0}{" "}
							</Typography>
							<Typography style={{ marginTop: "5px" }}>
								Blue Fragments: {blueBoxFragments()}{" "}
							</Typography>
							<Typography style={{ marginTop: "5px" }}>
								Purple Fragments: {purpleBoxFragments()}{" "}
							</Typography>
							<Typography style={{ marginTop: "5px" }}>
								Orange Fragments: {orangeBoxFragments()}{" "}
							</Typography>
							<Typography style={{ marginTop: "5px" }}>
								Watch Parts: {itemsBag().length}/{bagSize()}{" "}
							</Typography>
							<Typography
								onClick={() => {
									setViewBoosters(!viewBoosters);
								}}
								style={{ marginTop: "5px", cursor: "pointer" }}
							>
								Boosters: {currentUser.boosters ? currentUser.boosters : 0}{" "}
							</Typography>
							{viewBoosters && <Boosters />}
						</Grid>
						<Grid item xs={12} style={{ marginTop: "30px" }}>
							<Box
								style={{
									border: "solid 2px",
									borderRadius: "4px",
									borderColor: "#ffffff66",
									background: "grey",
									padding: "10px"
								}}
							>
								<Grid container>
									<Grid
										item
										xs={12}
										sm={6}
										md={3}
										style={{
											textAlign: "center",
											border: "solid 1px",
											borderRadius: "4px",
											borderColor: "#ffffff66",
											padding: "10px"
										}}
									>
										<Typography>WhiteBox: 4 points</Typography>
										<Typography>Owned: {whiteBoxes()}</Typography>
										<ButtonGroup style={{ marginTop: "10px" }}>
											<Button
												disabled={whiteboxDisabled()}
												size="small"
												onClick={() => handleGetWhiteBox()}
											>
												Get
											</Button>
											<Button
												disabled={whiteboxDisabled2()}
												size="small"
												onClick={() => handleOpenWhiteBox()}
											>
												Open
											</Button>
											<Button
												size="small"
												aria-controls="whiteBoxes"
												onClick={(e) => {
													setHelperDescription(e.currentTarget);
												}}
											>
												<AiOutlineQuestionCircle fontSize="1.5em" />
											</Button>
										</ButtonGroup>
										<Menu
											disableScrollLock
											className={classes.menu}
											id="whiteBoxes"
											onClose={handleCloseWhiteBoxesMenu}
											anchorEl={helperDescription}
											open={Boolean(helperDescription)}
										>
											<MenuItem>Grey Watch Part </MenuItem>
											<MenuItem>20% Chance of a White Watch Part</MenuItem>
											<MenuItem>1% Chance of a Light Green Part</MenuItem>
											<MenuItem>1-3 Fragments of Blue Box</MenuItem>
											<MenuItem>5% Chance of Fragment of Purple Box</MenuItem>
										</Menu>
									</Grid>

									<Grid
										item
										xs={12}
										sm={6}
										md={3}
										style={{
											textAlign: "center",
											border: "solid 1px",
											borderRadius: "4px",
											borderColor: "#ffffff66",
											padding: "10px"
										}}
									>
										<Typography>BlueBox: 10 Fragments</Typography>
										<Typography>Owned: {BlueBoxes()}</Typography>
										<ButtonGroup style={{ marginTop: "10px" }}>
											<Button
												disabled={blueboxDisabled()}
												size="small"
												onClick={() => handleGetBlueBox()}
											>
												Get
											</Button>
											<Button
												disabled={blueboxDisabled2()}
												size="small"
												onClick={() => handleOpenBlueBox()}
											>
												Open
											</Button>
											<Button
												aria-controls="blueBoxes"
												size="small"
												onClick={(e) =>
													setHelperDescriptionBlue(e.currentTarget)
												}
											>
												<AiOutlineQuestionCircle fontSize="1.5em" />
											</Button>
										</ButtonGroup>
										<Menu
											disableScrollLock
											className={classes.menu}
											id="blueBoxes"
											onClose={handleCloseBlueBoxesMenu}
											anchorEl={helperDescriptionBlue}
											open={Boolean(helperDescriptionBlue)}
										>
											<MenuItem>White Watch Part </MenuItem>
											<MenuItem>20% Chance of a Light Green Part</MenuItem>
											<MenuItem>1% Chance of a Dark Green Watch Part</MenuItem>
											<MenuItem>1-3 Fragments of Purple Box</MenuItem>
											<MenuItem>2% Chance of Fragment of Orange Box</MenuItem>
										</Menu>
									</Grid>
									<Grid
										item
										xs={12}
										sm={6}
										md={3}
										style={{
											textAlign: "center",
											border: "solid 1px",
											borderRadius: "4px",
											borderColor: "#ffffff66"
										}}
									>
										<Typography>PurpleBox</Typography>
										<Button size="small">
											<AiOutlineQuestionCircle
												onClick={() => setHelperDescription(!helperDescription)}
												fontSize="1.5em"
											/>
										</Button>
									</Grid>
									<Grid
										item
										xs={12}
										sm={6}
										md={3}
										style={{
											textAlign: "center",
											border: "solid 1px",
											borderRadius: "4px",
											borderColor: "#ffffff66"
										}}
									>
										<Typography>OrangeBox</Typography>
										<Button size="small">
											<AiOutlineQuestionCircle
												onClick={() => setHelperDescription(!helperDescription)}
												fontSize="1.5em"
											/>
										</Button>
									</Grid>
								</Grid>
							</Box>
						</Grid>
						{bagFull && (
							<Typography style={{ marginTop: "10px", color: "orange" }}>
								Your bag is full of Watch Parts, you need to use or delete some
								parts to open more boxes.
							</Typography>
						)}
						{collectionFull && (
							<Typography style={{ marginTop: "10px", color: "orange" }}>
								Your collection is full of Watches, you need to increase the
								spots or delete some watches to get new watches.
							</Typography>
						)}
						<Grid item xs={12} style={{ marginTop: "30px" }}>
							<Box
								style={{
									border: "solid 2px",
									borderRadius: "4px",
									borderColor: "#ffffff66",
									background: "grey",
									padding: "10px"
								}}
							>
								<Grid container alignItems="center" justifyContent="center">
									<Grid
										item
										xs={12}
										sm={12}
										style={{
											textAlign: "center",
											border: "solid 1px",
											borderRadius: "4px",
											borderColor: "#ffffff66",
											padding: "10px"
										}}
									>
										<Box
											style={{
												border: "solid 1px",
												borderRadius: "4px",
												borderColor: "#ffffff",
												background: "lightGrey",
												padding: "10px"
											}}
										>
											<WatchParts {...configWatchParts} />
										</Box>
									</Grid>
								</Grid>
							</Box>
						</Grid>
					</Grid>
				</Paper>
			</Grid>
			<Popup
				title="You just opened a Box!!"
				openPopup={openBoxPopUp}
				setOpenPopup={setOpenBoxPopUp}
			>
				<Typography style={{ color: "black" }}>{popUpInf}</Typography>
			</Popup>
		</div>
	);
};

export default WatchLab;
