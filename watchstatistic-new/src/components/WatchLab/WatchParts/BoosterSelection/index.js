import React from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const mapState = (state) => ({
	cartBoosters: state.cartData.cartBoosters,
	currentUser: state.user.currentUser
});

const BoosterSelection = () => {
	const { cartBoosters, currentUser } = useSelector(mapState);

	return (
		<Box>
			<Grid container>
				<Grid item xs={6}>
					<Typography>
						For this price Bracket you have selected a:{" "}
						{cartBoosters.a.productBrand} {cartBoosters.a.productName} you have{" "}
						{currentUser.boosters ? currentUser.boosters : 0} Boosters, select
						the number to use.
					</Typography>
				</Grid>
				<Grid item xs={6}>
					<CardMedia
						style={{ width: "80px", height: "80px" }}
						image={cartBoosters.a.productThumbnail[0]}
					></CardMedia>
				</Grid>
			</Grid>
		</Box>
	);
};

export default BoosterSelection;
