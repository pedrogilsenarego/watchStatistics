import React, { useState } from "react";
import FacebookShare from "../../forms/socialShare/Facebook";
import WhatsappShareButton from "../../forms/socialShare/Whatsapp";
import { GoMirror } from "react-icons/go";
import { AiFillFire } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { Typography } from "@material-ui/core";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { addProduct, addBooster } from "./../../../redux/Cart/cart.actions";

const AvatarsControllers = ({
	product,

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
	const [openGallery, setOpenGallery] = useState(false);

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
			{!openGallery && (
				<Box
					sx={{ alignSelf: "flex-end" }}
					style={{
						marginTop: "69vh",
						height: "50px",
						width: "50px",
						borderRadius: "10px",
						backgroundColor: "#ffffff66",
						position: "fixed",
						zIndex: "3"
					}}
					onClick={() => setOpenGallery(true)}
				>
					<IoIosArrowForward />
				</Box>
			)}
			{openGallery && (
				<Stack
					direction="row"
					spacing={2}
					style={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						marginTop: "69vh",
						borderRadius: "10px",
						padding: "5px",
						backgroundColor: "#ffffff66",
						position: "fixed",
						zIndex: "3"
					}}
				>
					<Avatar
						sx={{ bgcolor: "orangeRed", width: "7vh", height: "7vh" }}
						onClick={() => {
							handleAddToBoost(product);
						}}
					>
						<AiFillFire size="4vh" color="white" />
					</Avatar>
					<Avatar
						sx={{ bgcolor: "olive", width: "7vh", height: "7vh" }}
						onClick={() => {
							handleAddToCart(product, cartItems, productID);
						}}
						size="small"
					>
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
					</Avatar>
					<FacebookShare {...configShareButtons} />
					<WhatsappShareButton {...configShareButtons} />
					<IoIosArrowBack
						style={{ cursor: "pointer" }}
						onClick={() => {
							setOpenGallery(false);
						}}
					/>
				</Stack>
			)}
		</div>
	);
};

export default AvatarsControllers;
