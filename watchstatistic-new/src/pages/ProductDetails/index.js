import React from "react";
import ProductCard from "../../components/ProductCard";
import { Grid } from "@material-ui/core";

// eslint-disable-next-line
const ProductDetails = ({}) => {
	return (
		<Grid container>
			<Grid item xs={12} sm={9}>
				<ProductCard />
			</Grid>
			<Grid item xs={12} sm={3}></Grid>
		</Grid>
	);
};

export default ProductDetails;
