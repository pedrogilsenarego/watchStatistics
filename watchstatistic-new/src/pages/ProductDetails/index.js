import React, { useEffect } from "react";
import ProductCard from "./../../components/ProductDetails/ProductCard";
import ProductSidePanel from "../../components/ProductDetails/ProductSidePanel";
import { Grid, Box } from "@material-ui/core";
import {
	fetchProductStart,
	setProduct
} from "../../redux/Products/products.actions";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";

// eslint-disable-next-line
const ProductDetails = ({}) => {
	const dispatch = useDispatch();
	const { productID } = useParams();

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
		<Grid container>
			<Grid item xs={12} sm={9}>
				<ProductCard />
			</Grid>
			<Grid item xs={12} sm={3}>
				<Box bgcolor="primary.main" alignContent="center">
					<ProductSidePanel />
				</Box>
			</Grid>
		</Grid>
	);
};

export default ProductDetails;
