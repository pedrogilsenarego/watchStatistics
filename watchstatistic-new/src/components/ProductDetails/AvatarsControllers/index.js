import React from "react";
import FacebookShare from "../../forms/socialShare/Facebook";
import WhatsappShareButton from "../../forms/socialShare/Whatsapp";
import { GoMirror } from "react-icons/go";
import { AiFillFire } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { Grid, Box, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addProduct, addBooster } from "./../../../redux/Cart/cart.actions";

const AvatarsControllers = ({
	product,
	isMatch,
	cartItems,
	productID,
	productBrand,
	productName,
	reference,
	avgTotal,
	compareWatches
}) => {
	const dispatch = useDispatch();
	const history = useHistory();

	const handleAddToBoost = (product) => {
		if (!product) return;

		dispatch(addBooster(product));
		history.push("/watchstatistics/watchlaboratory");
	};

	const handleAddToCart = (product, cartItems, productID) => {
		if (!product) return;
		if (cartItems.length < 4) {
			product.productID = productID;
			dispatch(addProduct(product));
			history.push("/watchstatistics/comparewatches");
		} else {
			history.push("/watchstatistics/comparewatches");
		}
	};

	const configShareButtons = {
		quote:
			"Vote here on your personal opinion for the " +
			productBrand +
			" " +
			productName +
			" " +
			reference +
			" with a score of " +
			avgTotal,
		url: "https://fir-auth0-9b4cb.web.app/product/" + productID
	};

	return (
		<div>
			{" "}
			<Grid
				item
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					marginTop: "50vh",
					marginLeft: "-15px",
					position: "fixed",
					zIndex: "3"
				}}
			>
				<Box
					onClick={() => {
						handleAddToBoost(product);
					}}
					size="small"
					sx={{
						marginLeft: isMatch ? "15px" : "25px",
						width: "7vh",
						height: "7vh",
						borderRadius: 25,
						cursor: "pointer",
						backgroundColor: "#1D5B7B",
						marginBottom: "6px"
					}}
				>
					<Grid
						container
						direction="column"
						alignItems="center"
						justifyContent="center"
						spacing={0}
						style={{ paddingTop: "1.2vh" }}
					>
						<AiFillFire size="4vh" color="white" />
					</Grid>
				</Box>
				<Box
					onClick={() => {
						handleAddToCart(product, cartItems, productID);
					}}
					size="small"
					sx={{
						marginLeft: isMatch ? "15px" : "25px",
						width: "7vh",
						height: "7vh",
						borderRadius: 25,
						cursor: "pointer",
						backgroundColor: "#960617",
						marginBottom: "3px"
					}}
				>
					<Grid
						container
						direction="column"
						alignItems="center"
						justifyContent="center"
						spacing={0}
						style={{ paddingTop: "1.2vh" }}
					>
						{" "}
						{compareWatches && (
							<Typography
								style={{
									color: "white"
								}}
							>
								X
							</Typography>
						)}
						{!compareWatches && <GoMirror size="4vh" color="white" />}
					</Grid>
				</Box>
				<FacebookShare {...configShareButtons} />
				<WhatsappShareButton {...configShareButtons} />
			</Grid>
		</div>
	);
};

export default AvatarsControllers;
