import React, { useState } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import Popup from "../../components/controls/Popup";
import { updateCollectionStatus } from "../../redux/User/user.actions";
import { Typography } from "@material-ui/core";

const mapState = (state) => ({
	currentUser: state.user.currentUser
});

const MyCollection = (props) => {
	const { currentUser } = useSelector(mapState);
	const history = useHistory();
	const dispatch = useDispatch();
	const list = currentUser.collection;
	const [openDeleteWatchPopup, setOpenDeleteWatchPopup] = useState();
	const [watch, setWatch] = useState();
	const [posWatch, setPosWatch] = useState();
	const { collection, boosters } = currentUser;

	const handleWatch4BoosterPopup = (pos, item) => {
		setWatch(item);
		setPosWatch(pos);
		setOpenDeleteWatchPopup(true);
	};

	const handleWatch4BoosterConfirm = (watchPos) => {
		const oldArray = collection;
		const boostersIncreased = boosters ? boosters + 1 : 1;
		oldArray.splice(watchPos, 1);
		const configData = {
			...currentUser,
			flag: "boosters",
			boosters: boostersIncreased,
			userID: currentUser.id,
			collection: oldArray
		};
		dispatch(updateCollectionStatus(configData));
		setOpenDeleteWatchPopup(false);
	};

	return (
		<div>
			<Grid
				container
				spacing={2}
				style={{ marginTop: "100px" }}
				justifyContent="center"
			>
				<Grid item xs={12}>
					<Container style={{ backgroundColor: "#154A6799" }}>
						<Button style={{ color: "white" }}>All Watches</Button>
					</Container>
				</Grid>

				{list.map((item, pos) => (
					<Grid
						container
						spacing={0}
						direction="column"
						alignItems="center"
						justifyContent="center"
						key={item}
					>
						<ButtonGroup>
							<Button
								onClick={() => {
									history.push(`/product/${item[pos]}`);
								}}
							>
								{item}
							</Button>
							<Button
								onClick={() => {
									handleWatch4BoosterPopup(pos, item);
								}}
							>
								Trade this Watch for Boosters
							</Button>
						</ButtonGroup>
					</Grid>
				))}
				<Popup
					title={"Danger!!"}
					openPopup={openDeleteWatchPopup}
					setOpenPopup={setOpenDeleteWatchPopup}
				>
					<Typography style={{ color: "black" }}>
						You are Deleting: {watch}, this is not reversible.
					</Typography>
					<Typography style={{ color: "black" }}>
						You will receive 1 Booster
					</Typography>
					<ButtonGroup>
						<Button
							onClick={() => {
								handleWatch4BoosterConfirm(posWatch);
							}}
						>
							Accept
						</Button>
						<Button
							onClick={() => {
								setOpenDeleteWatchPopup(false);
							}}
						>
							Cancel
						</Button>
					</ButtonGroup>
				</Popup>
			</Grid>
		</div>
	);
};

export default MyCollection;
