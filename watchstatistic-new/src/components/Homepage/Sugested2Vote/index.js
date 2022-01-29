import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
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

	const filterData = () => {
		const newData = [];
		for (let i = 0; i < data.length; i++) {
			if (!currentUser.userVotes.includes(data[i].documentID)) {
				newData.push(data[i]);
			}
		}
		return newData;
	};

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
				<Avatar
					style={{
						backgroundColor: "#ffffff66",
						position: "absolute",
						zIndex: "2",
						cursor: "pointer",
						marginTop: "50px"
					}}
				>
					<AiFillCaretLeft fontSize="1em" />
				</Avatar>
				<Avatar
					style={{
						backgroundColor: "#ffffff66",
						position: "absolute",
						zIndex: "2",
						cursor: "pointer",
						marginTop: "50px",
						marginLeft: "88.5vw"
					}}
				>
					<AiFillCaretRight fontSize="1em" />
				</Avatar>
				{filterData().map((item, pos) => {
					const configItem = { currentUser };
					if (pos < 4) {
						return (
							<Grid item xs={6} sm={4} lg={3}>
								<Item item={item} key={pos} {...configItem} />
							</Grid>
						);
					} else return null;
				})}
			</Grid>
		</div>
	);
};

export default Sugested2Vote;
