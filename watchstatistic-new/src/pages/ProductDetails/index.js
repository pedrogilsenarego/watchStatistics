import React, { useEffect, useState } from "react";
import SideGraphPanel from "../../components/ProductDetails/ProductSideGraph";
import SideDescription from "../../components/ProductDetails/ProductSideDescription";
import { makeStyles } from "@material-ui/core/styles";
import { BsXDiamond } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Parallax } from "react-parallax";
import {
	Grid,
	Card,
	CardMedia,
	CardContent,
	IconButton,
	Box
} from "@material-ui/core";
import {
	fetchProductStart,
	setProduct
} from "../../redux/Products/products.actions";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";

const image1 =
	"https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2018/09/17/5595aa2e-863a-4243-ad43-87437f688e78/scuba-diving";
const image2 =
	"https://upload.wikimedia.org/wikipedia/commons/e/e7/Bluebells_%2834146232732%29.jpg";
const image3 =
	"https://www.idesignarch.com/wp-content/uploads/Buckingham-Palace-Throne-Room.jpg";

const useStyles = makeStyles((theme) => ({
	root: {},

	media: {
		height: "94vh",
		textAlign: "right",
		paddingTop: "86vh",
		paddingRight: "5px"
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

	const { productThumbnail, productName, productCategory } = product;

	const bgImage = () => {
		if (productCategory === "field") return image2;
		if (productCategory === "divers") return image1;
		if (productCategory === "dress") return image3;
	};

	if (!productThumbnail || !productName) return null;

	return (
		<Box>
			<Parallax bgImage={bgImage()} strength={300}>
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
							{!mainImage && (
								<CardMedia
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
							style={{ backgroundColor: "#04040680" }}
						>
							<CardContent style={{ padding: "5px" }}>
								<SideGraphPanel />
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} sm={12}>
						<Card style={{ backgroundColor: "#04040680" }}>
							<CardContent style={{ padding: "5px" }}>
								<SideDescription />
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Parallax>
		</Box>
	);
};

export default ProductDetails;
