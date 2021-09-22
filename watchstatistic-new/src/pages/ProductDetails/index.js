import React, { useEffect } from "react";
import SideGraphPanel from "../../components/ProductDetails/ProductSideGraph";
import SideDescription from "../../components/ProductDetails/ProductSideDescription";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import {
	Grid,
	Card,
	CardActionArea,
	CardMedia,
	CardContent
} from "@material-ui/core";

import {
	fetchProductStart,
	setProduct
} from "../../redux/Products/products.actions";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";

const useStyles = makeStyles((theme) => ({
	root: {},
	media: {
		height: "94vh"
	},
	side: {
		height: "100vh"
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

	const { productThumbnail, productName } = product;
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
	return (
		<div>
			<Grid
				container
				spacing={1}
				style={{
					paddingTop: "84px",
					paddingLeft: "10px",
					paddingRight: "10px",

					height: "100vh"
				}}
			>
				<Grid item xs={12} md={8}>
					<Card className={classes.root} alt={productName} disableRipple>
						<CardActionArea disableRipple>
							<CardMedia className={classes.media} image={productThumbnail} />
						</CardActionArea>
					</Card>
				</Grid>
				<Grid item xs={12} sm={4}>
					<Card xlassName={classes.side} style={{ backgroundColor: "#36454f" }}>
						<CardContent style={{ padding: "5px" }}>
							<SideGraphPanel />
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} sm={12}>
					<Card style={{ backgroundColor: "#36454f" }}>
						<CardContent style={{ padding: "5px" }}>
							<SideDescription />
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</div>
	);
};

export default ProductDetails;
