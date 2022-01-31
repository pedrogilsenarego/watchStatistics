import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { fetchMyCollectionStart } from "../../redux/Products/products.actions";

import Item from "./Item";

const mapState = (state) => ({
	products: state.productsData.myCollection,
	currentUser: state.user.currentUser
});

const MyCollection = (props) => {
	const { products, currentUser } = useSelector(mapState);
	const dispatch = useDispatch();

	const myCollection = currentUser.collection;

	useEffect(
		() => {
			dispatch(fetchMyCollectionStart({ myCollection }));
		},
		// eslint-disable-next-line
		[]
	);

	const relativePosFunct = () => {
		let newArray = [0, 1, 2, 0];
		let simetricArray = [];
		/* for (let i = 0; i <= currentUser.collection.length; i++) {
			for (let j = 0; i <= simetricArray.length; j++) {
				if (!currentUser.collection[i].includes(simetricArray[j]))
					newArray.push(i);
				else newArray.push(j);
				simetricArray.push(currentUser.collection[i]);
			}
		} */
		console.log(newArray);
		console.log(simetricArray);
		return newArray;
	};

	const relativePos = relativePosFunct();

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
				{myCollection.map((item, pos) => {
					const configItem = { item, pos, relativePos };
					return <Item item={item} key={pos} {...configItem} />;
				})}
			</Grid>
		</div>
	);
};

export default MyCollection;
