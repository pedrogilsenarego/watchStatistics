import React from "react";
import { Typography, Box } from "@material-ui/core";

import { useSelector } from "react-redux";

const mapState = (state) => ({
	product: state.productsData.product
});

// eslint-disable-next-line
const ProductSideDescription = ({}) => {
	const { product } = useSelector(mapState);

	const { productDesc, additionalData } = product;

	return (
		<div>
			<Box
				bgcolor={"primary.dark"}
				color={"text.secondary"}
				borderRadius="10px"
			>
				<Typography align="justify" style={{ width: "100%", padding: "10px" }}>
					{productDesc}
				</Typography>
			</Box>
			<Box
				bgcolor={"primary.dark"}
				color={"text.secondary"}
				borderRadius="10px"
				style={{ marginTop: "5px" }}
			>
				{additionalData.map((additionalData, pos) => {
					if (!additionalData) return null;

					return (
						<Typography
							align="justify"
							style={{ width: "100%", padding: "10px" }}
						>
							{additionalData}
						</Typography>
					);
				})}
			</Box>
		</div>
	);
};

export default ProductSideDescription;

//className={classes.legend}
//			dangerouslySetInnerHTML={{ __html: productDesc }}
