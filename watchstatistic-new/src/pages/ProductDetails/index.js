import React from "react";
import ProductCard from "../../components/ProductCard";
import { Grid } from "@material-ui/core";

// eslint-disable-next-line
const ProductDetails = ({}) => {
	return (
		<Grid container>
			<Grid container xs={12} sm={9}>
				<ProductCard />
			</Grid>
			<Grid container xs={12} sm={3}>
				<ProductCard />
			</Grid>
		</Grid>
	);
};

export default ProductDetails;
