import React, { useEffect, useState } from "react";
import SideGraphPanel from "../../components/ProductDetails/ProductSideGraph";
import SideDescription from "../../components/ProductDetails/ProductSideDescription";
import ProductSideList from "../../components/ProductDetails/ProductSideList";
import { makeStyles } from "@material-ui/core/styles";

import { useSelector } from "react-redux";
import { Parallax } from "react-parallax";
import AvatarsControllers from "../../components/ProductDetails/AvatarsControllers";
import { useParams } from "react-router";
import { Helmet } from "react-helmet";
import ImageMain from "../../components/ProductDetails/ImageMain"

import {
	Grid,
	Card,
	
	CardContent,
	
	Box,
	useMediaQuery,
	useTheme
} from "@material-ui/core";
import Container from "@mui/material/Container"

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

	const { product, currentUser, cartItems } = useSelector(mapState);
	
	const [compareWatches, setCompareWatches] = useState(false);
	const theme = useTheme();
	const isMatch = useMediaQuery(theme.breakpoints.down("xs"));

	const useStyles = makeStyles((theme) => ({
		filter: {},

	
		side: {
			
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

	const bgImage = () => {
		if (!currentUser) return productBackground;

		if (currentUser.backgroundImageOff) {
			if (productBackground) return productBackground;
		} else return;
	};

	if (!productThumbnail || !productName) return null;

	const configAvatarBtns = {
		product,
		isMatch,
		cartItems,
		productID,
		productBrand,
		productName,
		reference,
		avgTotal,
		compareWatches
	};

	const configImageMain = {
		isMatch,
		productThumbnail
	}

	return (
		<div>
			<Helmet>
				<meta property="og:image" content={productThumbnail} />
			</Helmet>
			<Container style={{marginTop: "40px"}}>
				<Parallax bgImage={bgImage()} strength={300}>
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
							<AvatarsControllers {...configAvatarBtns} />
							<ImageMain {...configImageMain}/>
							<Grid item xs={12} md={5}>
								<Card
									className={classes.side}
									style={{ backgroundColor: "#04040699" }}
								>
									<CardContent style={{ padding: "5px" }}>
										<SideGraphPanel />
									</CardContent>
								</Card>
							</Grid>

							<Grid item xs={12} md={7}>
								<Card style={{ backgroundColor: "#04040699" }}>
									<CardContent style={{ padding: "5px" }}>
										<SideDescription />
									</CardContent>
								</Card>
							</Grid>
							<Grid item xs={12} md={5}>
								<Card
									style={{ backgroundColor: "#04040699"}}
								>
									<CardContent style={{ padding: "5px" }}>
										<ProductSideList />
									</CardContent>
								</Card>
							</Grid>
						</Grid>
					</Box>
				</Parallax>
			</Container>
		</div>
	);
};

export default ProductDetails;
