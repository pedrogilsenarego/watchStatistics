import React, { useState } from "react";
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
				maxWidth: "350px"
			}
		}
	}
}));

const WatchLab = () => {
	const dispatch = useDispatch();
	const classes = useStyles();
	const [openBoxPopUp, setOpenBoxPopUp] = useState(false);
	const [helperDescription, setHelperDescription] = useState(false);
	const [helperDescriptionBlue, setHelperDescriptionBlue] = useState(false);
	const { currentUser } = useSelector(mapState);

	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

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
		const configData = {
			...currentUser,
			flag: "openWhitebox",
			whiteBox: whiteBoxes() - 1,
			blueBoxFragments: blueBoxFragments() + getRandomInt(1, 3),
			userID: currentUser.id
		};
		dispatch(updateBoxStatus(configData));
		setOpenBoxPopUp(true);
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
		if (!currentUser.whiteBox || currentUser.whiteBox < 1) {
			return true;
		} else return false;
	};

	const blueboxDisabled2 = () => {
		if (!currentUser.blueBox || currentUser.blueBox < 1) {
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

	return (
		<div>
			<Grid container justify="center">
				<Paper style={{ width: "90vw", background: "#196B91" }}>
					<Grid container style={{ padding: "20px" }}>
						<Grid item xs={12}>
							<Typography variant="h5">
								Trade your points and build your watch collection
							</Typography>
							<Typography style={{ marginTop: "20px" }}>
								Current Points: {currentUser.points}{" "}
							</Typography>
							<Typography style={{ marginTop: "5px" }}>
								Blue Fragments: {blueBoxFragments()}{" "}
							</Typography>
							{openBoxPopUp && (
								<Menu
									disableScrollLock
									className={classes.menu}
									id="openBoxPopUp"
									onClose={handleCloseOpenBoxPopUp}
									anchorEl={openBoxPopUp}
									open={Boolean(openBoxPopUp)}
								>
									<MenuItem>You just received:</MenuItem>
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
											<MenuItem>2xGrey or White Parts </MenuItem>
											<MenuItem>20% Chance of a Light Green Part</MenuItem>
											<MenuItem>1% Chance of a Dark Green Part</MenuItem>
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
											<MenuItem>3xWhite or Light Green Parts </MenuItem>
											<MenuItem>20% Chance of a Dark Green Part</MenuItem>
											<MenuItem>1% Chance of a Light Blue Part</MenuItem>
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
