import React from "react";
import { Typography, Box, Button, Grid } from "@material-ui/core";
import { useSelector } from "react-redux";

const mapState = (state) => ({
	product: state.productsData.product
});

// eslint-disable-next-line
const ProductSideDescription = ({}) => {
	const { product } = useSelector(mapState);
	const { productDesc, additionalData } = product;

	const openInNewTab = (url) => {
		const newWindow = window.open(url, "_blank", "noopener,noreferrer");
		if (newWindow) newWindow.opener = null;
	};

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
				<Grid container>
					{additionalData.map((additionalData, pos) => {
						if (!additionalData) return null;

						return (
							<Grid xs={6}>
								<Button
									align="justify"
									style={{ width: "100%", padding: "10px" }}
									onClick={() => openInNewTab(`${additionalData.link}`)}
								>
									{additionalData.title}
								</Button>
							</Grid>
						);
					})}
				</Grid>
			</Box>
		</div>
	);
};

export default ProductSideDescription;

//className={classes.legend}
//			dangerouslySetInnerHTML={{ __html: productDesc }}
