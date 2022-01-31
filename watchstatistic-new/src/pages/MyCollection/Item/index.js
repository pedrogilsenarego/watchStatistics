import React, { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import Popup from "../../../components/controls/Popup";
import { useSelector } from "react-redux";
import { Typography } from "@material-ui/core";
import Grid from "@mui/material/Grid";
import { updateCollectionStatus } from "../../../redux/User/user.actions";

const mapState = (state) => ({
	currentUser: state.user.currentUser
});

const Item = ({ item, pos }) => {
	const history = useHistory();
	const { currentUser } = useSelector(mapState);
	const dispatch = useDispatch();
	const [watch, setWatch] = useState();
	const [posWatch, setPosWatch] = useState();
	const [openDeleteWatchPopup, setOpenDeleteWatchPopup] = useState();
	const [openSellWatchPopup, setOpenSellWatchPopup] = useState();
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

	const handleWatch4SellPopup = (pos, item) => {
		setWatch(item);
		setPosWatch(pos);
		setOpenSellWatchPopup(true);
	};
	return (
		<div>
			<Grid
				container
				spacing={0}
				direction="row"
				alignItems="center"
				justifyContent="center"
				key={item}
			>
				<ButtonGroup>
					<Button
						onClick={() => {
							history.push(`/product/${item}`);
						}}
					>
						{item.productBrand} {item.productName}
					</Button>
					<Button
						onClick={() => {
							handleWatch4BoosterPopup(pos, item);
						}}
					>
						Trade this Watch for Boosters
					</Button>
					<Button
						onClick={() => {
							handleWatch4SellPopup(pos, item);
						}}
					>
						Sell this item
					</Button>
				</ButtonGroup>
			</Grid>
			<Popup
				title={"Sell this watch"}
				openPopup={openSellWatchPopup}
				setOpenPopup={setOpenSellWatchPopup}
			>
				<Typography style={{ color: "black" }}>
					You are Selling: {watch}, this is not reversible.
				</Typography>

				<ButtonGroup>
					<Button onClick={() => {}}>Accept</Button>
					<Button
						onClick={() => {
							setOpenSellWatchPopup(false);
						}}
					>
						Cancel
					</Button>
				</ButtonGroup>
			</Popup>
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
		</div>
	);
};

export default Item;
