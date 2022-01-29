import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Item from "./Item";
import { useDispatch, useSelector } from "react-redux";
import { fetchLatestProductsStart } from "../../../redux/Products/products.actions";

const mapState = (state) => ({
	currentUser: state.user.currentUser,
	products: state.productsData.latestProducts
});

const pageSize = 10;

const Sugested2Vote = () => {
	const dispatch = useDispatch();
	const { products, currentUser } = useSelector(mapState);
	const { data } = products;

	function filterData() {
		const newData = [...data];
		for (let i = 0; i < data.length; i++) {
			if (currentUser.userVotes.includes(data[i].documentID)) {
				newData.splice(i, 1);
			}
		}
		return newData;
	}

	useEffect(
		() => {
			dispatch(fetchLatestProductsStart({ pageSize }));
		},
		// eslint-disable-next-line
		[]
	);

	if (!Array.isArray(data)) return null;

	if (data.length < 1) {
		return (
			<div>
				<p>No search Results</p>
			</div>
		);
	}

	return (
		<div>
			<Typography variant={"h6"}>Sugested for you to vote</Typography>
			<Grid container spacing={2} style={{ paddingTop: "10px" }}>
				{filterData().map((item, pos) => {
					const configItem = { currentUser };
					return (
						<Grid item>
							<Item item={item} key={pos} {...configItem} />
						</Grid>
					);
				})}
			</Grid>
		</div>
	);
};

export default Sugested2Vote;
