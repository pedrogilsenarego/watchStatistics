import React, { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import Popup from "../../../components/controls/Popup";
import { useSelector } from "react-redux";
import { Typography } from "@material-ui/core";
import { updateCollectionStatus } from "../../../redux/User/user.actions";
import { setToAuction } from "../../../redux/Market/market.actions";
import { TextField } from "@mui/material";
import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";

const mapState = (state) => ({
	currentUser: state.user.currentUser
});

const Item = ({ item, pos, relativePos, products }) => {
	const history = useHistory();
	const { currentUser } = useSelector(mapState);
	const dispatch = useDispatch();
	const [watch, setWatch] = useState();
	const [posWatch, setPosWatch] = useState();
	const [openDeleteWatchPopup, setOpenDeleteWatchPopup] = useState();
	const [openSellWatchPopup, setOpenSellWatchPopup] = useState();
	const [price, setPrice] = useState(0);
	const { collection, boosters } = currentUser;

	const handleWatch4BoosterPopup = (pos, item) => {
		setWatch(
			products[relativePos[pos]].productBrand +
				" " +
				products[relativePos[pos]].productName
		);
		setPosWatch(pos);
		setOpenDeleteWatchPopup(true);
	};
	const handleWatch4SellConfirm = (watchPos) => {
		const oldArray = collection;
		oldArray.splice(watchPos, 1);
		const configData = {
			...currentUser,
			flag: "sell",
			userID: currentUser.id,
			collection: oldArray
		};
		dispatch(updateCollectionStatus(configData));
		const configOrder = {
			productBrand: products[relativePos[pos]].productBrand,
			productName: products[relativePos[pos]].productName,
			reference: products[relativePos[pos]].reference,
			price: parseInt(price)
		};
		dispatch(setToAuction(configOrder));

		setOpenDeleteWatchPopup(false);
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
		setWatch(
			products[relativePos[pos]].productBrand +
				" " +
				products[relativePos[pos]].productName
		);
		setPosWatch(pos);
		setOpenSellWatchPopup(true);
	};

	return (
		<div>
			<ButtonGroup>
				{products[relativePos[pos]] && (
					<Button
						onClick={() => {
							history.push(`/product/${item}`);
						}}
					>
						{products[relativePos[pos]].productBrand}{" "}
						{products[relativePos[pos]].productName}
					</Button>
				)}
				{!products[relativePos[pos]] && (
					<Button
						onClick={() => {
							history.push(`/product/${item}`);
						}}
					>
						{item}
					</Button>
				)}

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
			<Dialog open={openSellWatchPopup} style={{ color: "black" }}>
				<DialogTitle>
					<div style={{ textAlign: "center" }}>
						<Typography variant="h6" component="div" style={{ color: "black" }}>
							"Sell this watch"
						</Typography>
					</div>
				</DialogTitle>
				<DialogContent dividers>
					<Typography style={{ color: "black" }}>
						You are puting: {watch} to market, this is not reversible.
					</Typography>
					<TextField
						value={price}
						label={price}
						onChange={(e) => {
							setPrice(e.target.value);
						}}
					></TextField>
					<ButtonGroup>
						<Button
							onClick={() => {
								handleWatch4SellConfirm(posWatch);
							}}
						>
							Accept
						</Button>
						<Button
							onClick={() => {
								setOpenSellWatchPopup(false);
							}}
						>
							Cancel
						</Button>
					</ButtonGroup>
				</DialogContent>
			</Dialog>

			<Popup
				title={"Danger!!"}
				openPopup={openDeleteWatchPopup}
				setOpenPopup={setOpenDeleteWatchPopup}
			>
				<Typography style={{ color: "black" }}>
					You are Trading a: {watch}, this is not reversible.
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
