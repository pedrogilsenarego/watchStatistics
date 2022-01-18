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
import { AiFillFire } from "react-icons/ai";
import { useHistory, useParams } from "react-router";
import { addProduct } from "./../../redux/Cart/cart.actions";
import { Helmet } from "react-helmet";

import {
	Grid,
	Card,
	CardMedia,
	CardContent,
	IconButton,
	Box,
	Typography,
	useMediaQuery,
	useTheme
} from "@material-ui/core";

import {
	fetchProductStart,
	setProduct
} from "../../redux/Products/products.actions";
import { useDispatch } from "react-redux";

const mapState = (state) => ({
	currentUser: state.user.currentUser,
	product: state.productsData.product,
	cartItems: state.cartData.cartItems,
	cartBoosters: state.cartData.cartBoosters
});

// eslint-disable-next-line
const ProductDetails = ({}) => {
	const dispatch = useDispatch();
	const { productID } = useParams();
	const history = useHistory();
	const { product, currentUser, cartItems, cartBoosters } =
		useSelector(mapState);
	const [mainImage, setMainImage] = useState(null);
	const [compareWatches, setCompareWatches] = useState(false);
	const [booster, setBooster] = useState(false);
	const theme = useTheme();
	const isMatch = useMediaQuery(theme.breakpoints.down("xs"));

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
			height: isMatch ? null : "94vh"
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

	const classes = useStyles();

	useEffect(
		() => {
			dispatch(fetchProductStart(productID));
			if (
				cartItems.length > 3 ||
				cartItems.some((e) => e.reference === reference)
			)
				setCompareWatches(true);
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
		productBackground,
		productBrand,
		reference,
		avgTotal
	} = product;

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

	const bgImage = () => {
		if (!currentUser) return productBackground;

		if (!currentUser.backgroundImageOff) {
			if (productBackground) return productBackground;
		} else return;
	};

	if (!productThumbnail || !productName) return null;

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

	const handleAddToBoost = (product, cartBoosters) => {
		if (!product) return;
		if (cartBoosters.length < 9) {
		}
	};

	return (
		<div>
			<Helmet>
				<meta property="og:image" content={productThumbnail} />
			</Helmet>
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
								paddingTop: "90px",
								paddingLeft: "10px",
								paddingRight: "10px"
							}}
						>
							<Grid item xs={12} md={8}>
								<Box alt={productName}>
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
												handleAddToBoost(product, cartBoosters);
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
												{" "}
												{booster && (
													<Typography
														style={{
															color: "white"
														}}
													>
														X
													</Typography>
												)}
												{!booster && <AiFillFire size="4vh" color="white" />}
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
												{!compareWatches && (
													<GoMirror size="4vh" color="white" />
												)}
											</Grid>
										</Box>
										<FacebookShare {...configShareButtons} />
										<WhatsappShareButton {...configShareButtons} />
									</Grid>
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
		</div>
	);
};

export default ProductDetails;
