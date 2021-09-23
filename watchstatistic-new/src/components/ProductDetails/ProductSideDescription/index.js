import React from "react";
import { Typography, Box, Button, Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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
	product: state.productsData.product
});

// eslint-disable-next-line
const ProductSideDescription = ({}) => {
	const { product } = useSelector(mapState);
	const { productDesc, additionalData } = product;
	const classes = useStyles();

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
				<Typography
					dangerouslySetInnerHTML={{ __html: productDesc }}
					align="justify"
					style={{ width: "100%", padding: "10px" }}
				/>
			</Box>
			<Box
				bgcolor={"primary.dark"}
				color={"text.secondary"}
				borderRadius="10px"
				style={{ marginTop: "5px" }}
			>
				<Grid container>
					{additionalData &&
						additionalData.map((additionalData, pos) => {
							return (
								<Grid xs={6}>
									<Button
										className={classes.textBtn}
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
