import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { buyMarketProduct } from "../../../redux/Market/market.actions";

const Item = ({ item, pos, marketData, currentUser }) => {
	const dispatch = useDispatch();

	const handleBuyItem = () => {
		const newCollection = currentUser.collection;
		newCollection.push();

		const configBuyItem = { ...marketData, documentID: item.documentID };
		dispatch(buyMarketProduct(configBuyItem));
	};

	return (
		<div style={{ display: "flex" }}>
			<Typography>
				{item.productBrand} {item.productName} {item.reference} {item.price}
			</Typography>
			<Button onClick={() => handleBuyItem()}>Buy</Button>
		</div>
	);
};

export default Item;
