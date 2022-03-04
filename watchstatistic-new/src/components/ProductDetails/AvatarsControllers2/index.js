import React from "react";
import FacebookShare from "../../forms/socialShare/Facebook";
import WhatsappShareButton from "../../forms/socialShare/Whatsapp";
import { GoMirror } from "react-icons/go";
import { AiFillFire } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { Typography } from "@material-ui/core";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";

import { addProduct, addBooster } from "../../../redux/Cart/cart.actions";

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
		<div style={{
		}}>
			{" "}
			<Stack
				direction="row"
				spacing={1}
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "flex-end",
					paddingRight: "10px"				
				}}
			>
				
				
					<>
						<Avatar
							sx={{
								bgcolor: "#00000000",
								border: "solid 3px",
								borderColor: "#ffffff66",
								width: "6vh",
								height: "6vh",
								cursor: "pointer"
							}}
							onClick={() => {
								handleAddToBoost(product);
							}}
						>
							<AiFillFire size="4vh" color="#ffffff66" />
						</Avatar>
						<Avatar
							sx={{
								bgcolor: "#00000000",
								border: "solid 3px",
								borderColor: "#ffffff66",
								width: "6vh",
								height: "6vh",
								cursor: "pointer"
							}}
							onClick={() => {
								handleAddToCart(product, cartItems, productID);
							}}
							size="small"
						>
							{compareWatches && (
								<Typography
									style={{
										color: "#ffffff66",
									}}
								>
									X
								</Typography>
							)}
							{!compareWatches && <GoMirror size="3vh" color="#ffffff66" />}
						</Avatar>
						<FacebookShare {...configShareButtons} />
						<WhatsappShareButton {...configShareButtons} />
						
					</>
				
			</Stack>
		</div>
	);
};

export default AvatarsControllers;
