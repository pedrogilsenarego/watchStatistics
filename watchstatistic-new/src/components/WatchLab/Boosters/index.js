import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import { useSelector } from "react-redux";
import { Typography } from "@material-ui/core";

const mapState = (state) => ({
	cartBoosters: state.cartData.cartBoosters
});

const Boosters = () => {
	const { cartBoosters } = useSelector(mapState);

	return (
		<Paper style={{ padding: "10px" }}>
			{Object.keys(cartBoosters).map((item, pos) => (
				<Box>
					<Typography style={{ color: "black" }}>
						{cartBoosters[item].productPriceBrackets} -{" "}
						{cartBoosters[item].productBrand} - {cartBoosters[item].productName}
					</Typography>
					<CardMedia
						style={{ height: "50px", width: "80px", borderRadius: "3px" }}
						image={cartBoosters[item].productThumbnail[0]}
					></CardMedia>
				</Box>
			))}
		</Paper>
	);
};

export default Boosters;
