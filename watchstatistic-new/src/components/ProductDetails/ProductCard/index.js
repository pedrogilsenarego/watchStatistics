import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import {
	Typography,
	Card,
	CardActionArea,
	CardMedia,
	CardActions,
	Button
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

	const { productThumbnail, productName, productBrand } = product;
	const classes = useStyles();
	return (
		<Card className={classes.root} alt={productName}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={productThumbnail}
					title="hello"
				/>
				<CardActions>
					<Typography gutterBottom variant="h5" component="h2">
						{productBrand} - {productName}
					</Typography>
					<Button size="small" color="secondary">
						More
					</Button>
					<Button size="small" color="secondary">
						Charts
					</Button>
					<Button size="small" color="secondary">
						Description
					</Button>
				</CardActions>
			</CardActionArea>
		</Card>
	);
};
export default ProductCard;

//<Typography dangerouslySetInnerHTML={{ __html: productDesc }} />
