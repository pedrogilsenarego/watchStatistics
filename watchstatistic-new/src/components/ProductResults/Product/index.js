import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
	Card,
	CardActionArea,
	CardContent,
	Button,
	Typography,
	CardMedia,
	CardActions
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		maxwidth: 345
	},
	media: {
		height: 145
	}
}));

const Product = (product) => {
	const { documentID, productThumbnail, productName } = product;
	if (!documentID || !productThumbnail || !productName) return null;
	// eslint-disable-next-line
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
						{productName}
					</Typography>
					<Typography variant="body2" color="textSecondary">
						Hello2
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size="small" color="secondary">
					Share
				</Button>
				<Button
					component={NavLink}
					to={`/product/${documentID}`}
					size="small"
					color="secondary"
				>
					Vote Here
				</Button>
			</CardActions>
		</Card>
	);
};

export default Product;
