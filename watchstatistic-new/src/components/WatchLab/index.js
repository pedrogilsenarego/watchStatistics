import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

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
import { TiDelete } from "react-icons/ti";
import { updateBoxStatus } from "../../redux/User/user.actions";
import { makeStyles } from "@material-ui/core/styles";

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
	const [openBoxPopUp, setOpenBoxPopUp] = useState(false);
	const [bagFull, setBagFull] = useState(false);
	const [popUpInf, setPopUpInfo] = useState(null);
	const [helperDescription, setHelperDescription] = useState(false);
	const [helperDescriptionBlue, setHelperDescriptionBlue] = useState(false);
	const { currentUser } = useSelector(mapState);

	useEffect(
		() => {
			if (currentUser.watchParts && currentUser.watchParts.length > bagSize()) {
				setBagFull(true);
			}
		},
		// eslint-disable-next-line
		[currentUser.watchParts]
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
		if (a === 1) return "WatchCase";
		if (a === 2) return "Movement";
		if (a === 3) return "Crown";
		if (a === 4) return "Glass";
		if (a === 5) return "Bracelet";
	}

	function getRandomGreyPart() {
		const a = getRandomWatchPart();
		return "0" + a;
	}

	const bagSize = () => {
		if (!currentUser.experience) return 0;
		if (currentUser.experience < 20) return 5;
		if (currentUser.experience < 100) return 6;
		if (currentUser.experience < 200) return 7;
		if (currentUser.experience < 500) return 8;
		if (currentUser.experience < 1500) return 9;
		if (currentUser.experience < 5000) return 10;
		else return 15;
	};

	const itemsBag = () => {
		if (!currentUser.watchParts) return "";
		else return currentUser.watchParts;
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

	const handleGetWhiteBox = () => {
		const configData = {
			...currentUser,
			flag: "getWhitebox",
			points: currentUser.points - 10,
			whiteBox: whiteBoxes() + 1,
			userID: currentUser.id
		};
		dispatch(updateBoxStatus(configData));
	};

	const handleGetBlueBox = () => {
		const configData = {
			...currentUser,
			flag: "getBluebox",
			blueFragments: currentUser.blueFragments - 10,
			blueBox: BlueBoxes() + 1,
			userID: currentUser.id
		};
		dispatch(updateBoxStatus(configData));
	};

	const whiteboxDisabled = () => {
		if (!currentUser.points || currentUser.points <= 10) {
			return true;
		} else return false;
	};

	const blueboxDisabled = () => {
		if (!currentUser.blueFragments || currentUser.blueFragments <= 10) {
			return true;
		} else return false;
	};

	const handleOpenWhiteBox = () => {
		const a = getRandomGreyPart();
		const configData = {
			...currentUser,
			flag: "openWhitebox",
			whiteBox: whiteBoxes() - 1,
			blueBoxFragments: blueBoxFragments() + getRandomInt(1, 3),
			purpleBoxFragments: purpleBoxFragments() + percentageLoot(2),
			watchParts: !currentUser.watchParts ? [a] : [...itemsBag(), a],
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
				a.substring(1)
		);
	};

	const handleOpenBlueBox = () => {
		const configData = {
			...currentUser,
			flag: "openBluebox",
			blueBox: BlueBoxes() - 1,
			userID: currentUser.id
		};
		dispatch(updateBoxStatus(configData));
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

	const handleCloseOpenBoxPopUp = () => {
		setOpenBoxPopUp(false);
	};

	const newWatchParts = (watchParts) => {
		let newArray = watchParts;
		newArray = newArray.substring(1);
		return newArray;
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

	const handleDeleteWatchPart = () => {};

	return (
		<div>
			<Grid container justify="center">
				<Paper style={{ width: "90vw", background: "#196B91" }}>
					<Grid container style={{ padding: "20px" }}>
						<Grid item xs={12}>
							<Typography variant="h5">
								User your Goodies to build your watch collection
							</Typography>
							<Typography style={{ marginTop: "20px" }}>
								Current Points: {currentUser.points}{" "}
							</Typography>
							<Typography style={{ marginTop: "5px" }}>
								Blue Fragments: {blueBoxFragments()}{" "}
							</Typography>
							<Typography style={{ marginTop: "5px" }}>
								Purple Fragments: {purpleBoxFragments()}{" "}
							</Typography>
							<Typography style={{ marginTop: "5px" }}>
								Watch Parts: {itemsBag().length}/{bagSize()}{" "}
							</Typography>
							<Grid container>
								{currentUser.watchParts &&
									currentUser.watchParts.map((watchParts, pos) => {
										return (
											<Grid xs={6} md={3}>
												<ButtonGroup>
													<Button
														align="justify"
														style={{
															width: "100%",
															padding: "10px",
															color: colorWatchParts(watchParts)
														}}
													>
														{newWatchParts(watchParts)}
													</Button>
													<Button>
														<TiDelete fontSize="3.5em" />
													</Button>
												</ButtonGroup>
											</Grid>
										);
									})}
							</Grid>
							{openBoxPopUp && (
								<Menu
									disableScrollLock
									className={classes.menu}
									id="openBoxPopUp"
									onClose={handleCloseOpenBoxPopUp}
									anchorEl={openBoxPopUp}
									open={Boolean(openBoxPopUp)}
								>
									<MenuItem>{popUpInf}</MenuItem>
								</Menu>
							)}
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
										<Typography>WhiteBox: 10 points</Typography>
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
											<MenuItem>2% Chance of Fragment of Purple Box</MenuItem>
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
												onClick={() =>
													setHelperDescriptionBlue(!helperDescriptionBlue)
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
										sm={6}
										style={{
											textAlign: "center",
											border: "solid 1px",
											borderRadius: "4px",
											borderColor: "#ffffff66",
											padding: "10px"
										}}
									></Grid>
								</Grid>
							</Box>
						</Grid>
					</Grid>
				</Paper>
			</Grid>
		</div>
	);
};

export default WatchLab;
