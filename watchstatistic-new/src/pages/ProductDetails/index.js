import React, { useEffect, useState } from "react";
import SideGraphPanel from "../../components/ProductDetails/ProductSideGraph";
import SideDescription from "../../components/ProductDetails/ProductSideDescription";
import ProductSideList from "../../components/ProductDetails/ProductSideList";
import { makeStyles } from "@material-ui/core/styles";
import { BsXDiamond } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Parallax } from "react-parallax";
import FacebookShare from "../../components/forms/socialShare/Facebook";
import WhatsappShareButton from "../../components/forms/socialShare/Whatsapp";
import { GoMirror } from "react-icons/go";
import { useHistory, useParams } from "react-router";
import { addProduct } from "./../../redux/Cart/cart.actions";

import ButtonGroup from "@mui/material/ButtonGroup";

import {
	Grid,
	Card,
	CardMedia,
	CardContent,
	IconButton,
	Box
} from "@material-ui/core";
import { Button } from "@mui/material";
import {
	fetchProductStart,
	setProduct
} from "../../redux/Products/products.actions";
import { useDispatch } from "react-redux";

const image1 =
	"https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2018/09/17/5595aa2e-863a-4243-ad43-87437f688e78/scuba-diving";
const image2 =
	"https://upload.wikimedia.org/wikipedia/commons/e/e7/Bluebells_%2834146232732%29.jpg";
const image3 =
	"https://www.idesignarch.com/wp-content/uploads/Buckingham-Palace-Throne-Room.jpg";

const image4 = "https://wallpaperaccess.com/full/465780.jpg";
const image5 =
	"https://assets-prd.formulae.cloud/-/media/images/news/2020/september/formula-e-grid-shot-start.jpg?modified=20200924095253&cx=0.5&cy=0.8&cw=1440&ch=707&hash=A789C5D311486689FF8C7780CA9E3249";

const useStyles = makeStyles((theme) => ({
	root: {},

	filter: {},

	media: {
		height: "94vh",
		textAlign: "right",
		paddingTop: "86vh",
		paddingRight: "5px",
		borderRadius: "4px"
	},
	side: {
		height: "94vh"
	},
	textBtn: {
		color: "#FFFFFF",
		fontSize: "13px",

		"&:hover": {
			color: "#FFA500"
		},
		"&:active": {
			color: "#FFFFFF"
		}
	}
}));

const mapState = (state) => ({
	currentUser: state.user.currentUser,
	product: state.productsData.product
});

// eslint-disable-next-line
const ProductDetails = ({}) => {
	const dispatch = useDispatch();
	const { productID } = useParams();
	const history = useHistory();
	const { product } = useSelector(mapState);
	const [mainImage, setMainImage] = useState(null);

	const classes = useStyles();

	useEffect(
		() => {
			dispatch(fetchProductStart(productID));
			return () => {
				dispatch(setProduct({}));
			};
		},
		// eslint-disable-next-line
		[]
	);

	const {
		productThumbnail,
		productName,
		productCategory,
		productBackground,
		productBrand,
		reference,
		avgTotal
	} = product;

	const configShareButtons = {
		quote:
			"Vote here on your personal opinion on the " +
			productBrand +
			" " +
			productName +
			" " +
			reference +
			" with a score of " +
			avgTotal,
		url: "https://fir-auth0-9b4cb.web.app/product/" + productID
	};

	const bgImage = () => {
		if (productBackground) return productBackground;
		if (productCategory === "field") return image2;
		if (productCategory === "divers") return image1;
		if (productCategory === "dress") return image3;
		if (productCategory === "pilot") return image4;
		if (productCategory === "racing") return image5;
	};

	if (!productThumbnail || !productName) return null;

	const handleAddToCart = (product) => {
		dispatch(addProduct(product));
		history.push("/watchstatistics/comparewatches");
	};

	return (
		<Box>
			<Parallax style={{}} bgImage={bgImage()} strength={300}>
				<Box
					sx={{ borderRadius: "10px" }}
					className={classes.filter}
					height={"100%"}
					style={{
						position: "relative"
					}}
				>
					<Grid
						container
						spacing={1}
						style={{
							paddingTop: "70px",
							paddingLeft: "10px",
							paddingRight: "10px"
						}}
					>
						<Grid item xs={12} md={8}>
							<Box alt={productName}>
								<ButtonGroup
									style={{
										display: "flex",
										flexDirection: "column",
										justifyContent: "space-between",
										marginTop: "60vh",
										marginLeft: "-15px",
										position: "fixed",
										zIndex: "3"
									}}
								>
									<Button
										onClick={() => {
											handleAddToCart(product);
										}}
										size="small"
										sx={{
											marginLeft: "25px",
											width: "6.5vh",
											height: "6.5vh",
											borderRadius: 25,
											backgroundColor: "red",
											marginBottom: "3px",
											alignItems: "center",
											justifyContent: "center"
										}}
									>
										<GoMirror size="4vh" color="white" />
									</Button>
									<FacebookShare {...configShareButtons} />
									<WhatsappShareButton {...configShareButtons} />
								</ButtonGroup>
								{!mainImage && (
									<CardMedia
										style={{ borderRadius: "4px" }}
										className={classes.media}
										image={productThumbnail[0]}
									>
										{productThumbnail &&
											productThumbnail.map((productThumbnail, pos) => {
												return (
													<IconButton
														className={classes.textBtn}
														onClick={(e) => {
															setMainImage(productThumbnail);
														}}
													>
														<BsXDiamond fontSize="1.5em" />
													</IconButton>
												);
											})}
									</CardMedia>
								)}
								{mainImage && (
									<CardMedia className={classes.media} image={mainImage}>
										{productThumbnail &&
											productThumbnail.map((productThumbnail, pos) => {
												return (
													<IconButton
														className={classes.textBtn}
														onClick={(e) => {
															setMainImage(productThumbnail);
														}}
													>
														<BsXDiamond fontSize="1.5em" />
													</IconButton>
												);
											})}
									</CardMedia>
								)}
							</Box>
						</Grid>
						<Grid item xs={12} md={4}>
							<Card
								className={classes.side}
								style={{ backgroundColor: "#04040699" }}
							>
								<CardContent style={{ padding: "5px" }}>
									<SideGraphPanel />
								</CardContent>
							</Card>
						</Grid>

						<Grid item xs={12} sm={8}>
							<Card style={{ backgroundColor: "#04040699" }}>
								<CardContent style={{ padding: "5px" }}>
									<SideDescription />
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs={12} sm={4}>
							<Card
								style={{ backgroundColor: "#04040699", marginBottom: "10px" }}
							>
								<CardContent style={{ padding: "5px" }}>
									<ProductSideList />
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				</Box>
			</Parallax>
		</Box>
	);
};

export default ProductDetails;
