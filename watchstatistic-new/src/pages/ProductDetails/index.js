import React, { useEffect, useState } from "react";
import SideGraphPanel from "../../components/ProductDetails/ProductSideGraph";
import SideDescription from "../../components/ProductDetails/ProductSideDescription";
import SideAdditionalData from "../../components/ProductDetails/ProductSideAdditionalData";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import {
	Grid,
	Box,
	Typography,
	Card,
	CardActionArea,
	CardMedia,
	CardActions,
	Button
} from "@material-ui/core";

import {
	fetchProductStart,
	setProduct
} from "../../redux/Products/products.actions";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";

const useStyles = makeStyles((theme) => ({
	root: {
		maxwidth: 345
	},
	media: {
		height: "75vh"
	}
}));

const mapState = (state) => ({
	currentUser: state.user.currentUser,
	product: state.productsData.product
});

// eslint-disable-next-line
const ProductDetails = ({}) => {
	const [sidePanel, setSidePanel] = useState("graph");
	const dispatch = useDispatch();
	const { productID } = useParams();
	const { product } = useSelector(mapState);

	const { productThumbnail, productName, productBrand } = product;
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
					paddingTop: "57px",
					paddingLeft: "10px",
					paddingRight: "10px",
					paddingBottom: "10px"
				}}
			>
				<Grid item xs={12} sm={7}>
					<Card className={classes.root} alt={productName}>
						<CardActionArea>
							<CardActions style={{ backgroundColor: "#36454f" }}>
								<Grid align="left" xs={6}>
									<Typography
										gutterBottom
										variant="h5"
										component="h2"
										style={{ fontFamily: "'Comfortaa', cursive" }}
									>
										{productBrand} - {productName}
									</Typography>
								</Grid>
								<Grid align="right" xs={6}>
									<Button
										size="small"
										color="secondary"
										onClick={(e) => {
											setSidePanel("additionalData");
										}}
									>
										About
									</Button>
									<Button
										size="small"
										color="secondary"
										onClick={(e) => {
											setSidePanel("graph");
										}}
									>
										Charts
									</Button>
									<Button
										size="small"
										color="secondary"
										onClick={(e) => {
											setSidePanel("description");
										}}
									>
										Description
									</Button>
								</Grid>
							</CardActions>
							<CardMedia className={classes.media} image={productThumbnail} />
						</CardActionArea>
					</Card>
				</Grid>
				<Grid item xs={12} sm={5}>
					<Box bgcolor="primary.main" alignContent="center">
						{sidePanel === "graph" && <SideGraphPanel />}
						{sidePanel === "description" && <SideDescription />}
						{sidePanel === "additionalData" && <SideAdditionalData />}
					</Box>
				</Grid>
			</Grid>
		</div>
	);
};

export default ProductDetails;
