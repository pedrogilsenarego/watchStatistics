import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

import "./styles.scss";
import {
	Typography,
	Card,
	CardActionArea,
	CardMedia,
	CardContent
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		maxwidth: 345
	},
	media: {
		height: 500
	}
}));

const mapState = (state) => ({
	currentUser: state.user.currentUser,
	product: state.productsData.product
});

// eslint-disable-next-line
const ProductCard = ({}) => {
	const { product } = useSelector(mapState);

	const { productThumbnail, productName, productDesc, productBrand } = product;
	const classes = useStyles();
	return (
		<Card className={classes.root} alt={productName}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={productThumbnail}
					title="hello"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{productBrand} - {productName}
					</Typography>
				</CardContent>
			</CardActionArea>

			<span
				className="desc"
				dangerouslySetInnerHTML={{ __html: productDesc }}
			/>
		</Card>
	);
};
export default ProductCard;
