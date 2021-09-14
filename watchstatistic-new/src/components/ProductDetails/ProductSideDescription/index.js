import React from "react";
import { Grid, Box, Typography } from "@material-ui/core";

import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";

const mapState = (state) => ({
	product: state.productsData.product
});

const useStyles = makeStyles((theme) => ({
	legend: {
		fontSize: 20
	}
}));

// eslint-disable-next-line
const ProductSideDescription = ({}) => {
	const { product } = useSelector(mapState);

	const { productDesc } = product;

	const classes = useStyles();

	return (
		<Grid>
			<Box bgcolor={"primary.dark"} textAlign="center" color={"text.secondary"}>
				<Typography
					className={classes.legend}
					dangerouslySetInnerHTML={{ __html: productDesc }}
				/>
			</Box>
		</Grid>
	);
};

export default ProductSideDescription;
