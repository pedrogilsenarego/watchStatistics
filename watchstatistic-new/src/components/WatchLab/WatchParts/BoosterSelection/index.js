import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const mapState = (state) => ({
	cartBoosters: state.cartData.cartBoosters,
	currentUser: state.user.currentUser
});

const BoosterSelection = ({ fusionPrice }) => {
	const { cartBoosters, currentUser } = useSelector(mapState);
	const [numberBoosters, setNumberBoosters] = useState(0);
	const [decreaseDisable, setDecreaseDisable] = useState(true);
	const [increaseDisable, setIncreaseDisable] = useState(false);

	const boosterValue = () => {
		if (fusionPrice === "0-200€") return cartBoosters.a;
		if (fusionPrice === "200-500€") return cartBoosters.b;
		if (fusionPrice === "500-1000€") return cartBoosters.c;
		if (fusionPrice === "1000-5000€") return cartBoosters.d;
		if (fusionPrice === "5000-10.000€") return cartBoosters.e;
		if (fusionPrice === "10.000-30.000€") return cartBoosters.f;
		if (fusionPrice === "30.000-50.000€") return cartBoosters.g;
		if (fusionPrice === "50.000-100.000€") return cartBoosters.h;
		if (fusionPrice === "100.000€+") return cartBoosters.i;
	};

	const handleIncrementBooster = () => {
		setNumberBoosters(numberBoosters + 1);
		setDecreaseDisable(false);
	};

	const handleDecreaseBooster = () => {
		setNumberBoosters(numberBoosters - 1);
		setIncreaseDisable(false);
	};

	useEffect(() => {
		if (numberBoosters === 0) setDecreaseDisable(true);
		if (currentUser.boosters === numberBoosters) setIncreaseDisable(true);
		// eslint-disable-next-line
	}, [numberBoosters]);

	return (
		<Box>
			<Grid container>
				<Grid item xs={6}>
					<Typography>
						For this price Bracket you have selected a{" "}
						{boosterValue().productBrand} {cartBoosters.a.productName} you have{" "}
						{currentUser.boosters ? currentUser.boosters : 0} Boosters, select
						the number to use.
					</Typography>
					<ButtonGroup>
						<Button
							disabled={decreaseDisable}
							onClick={() => {
								handleDecreaseBooster();
							}}
						>
							-
						</Button>
						<Button>{numberBoosters}</Button>
						<Button
							disabled={increaseDisable}
							onClick={() => {
								handleIncrementBooster();
							}}
						>
							+
						</Button>
					</ButtonGroup>
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
