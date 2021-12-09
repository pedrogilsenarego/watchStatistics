import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import {
	Grid,
	Typography,
	Box,
	Paper,
	Button,
	ButtonGroup
} from "@material-ui/core";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { updateBoxStatus } from "../../redux/User/user.actions";

const mapState = (state) => ({
	currentUser: state.user.currentUser
});

const WatchLab = () => {
	const dispatch = useDispatch();
	const [helperDescription, setHelperDescription] = useState(false);
	const { currentUser } = useSelector(mapState);

	const handleGetWhiteBox = () => {
		const configData = {
			...currentUser,
			userID: currentUser.id
		};
		dispatch(updateBoxStatus(configData));
	};

	const whiteBoxes = () => {
		if (!currentUser.whiteBox) return 0;
		else return currentUser.whiteBox;
	};

	const whiteboxDisabled = () => {
		if (currentUser.points <= 10) {
			return true;
		} else return false;
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
										xs={3}
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
											<Button size="small">
												<AiOutlineQuestionCircle
													onClick={() =>
														setHelperDescription(!helperDescription)
													}
													fontSize="1.5em"
												/>
											</Button>
										</ButtonGroup>
									</Grid>

									<Grid
										item
										xs={3}
										style={{
											textAlign: "center",
											border: "solid 1px",
											borderRadius: "4px",
											borderColor: "#ffffff66"
										}}
									>
										<Typography>BlueBox</Typography>
										<Button size="small">
											<AiOutlineQuestionCircle
												onClick={() => setHelperDescription(!helperDescription)}
												fontSize="1.5em"
											/>
										</Button>
									</Grid>
									<Grid
										item
										xs={3}
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
										xs={3}
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
					</Grid>
				</Paper>
			</Grid>
		</div>
	);
};

export default WatchLab;
