import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, CardMedia, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		maxwidth: 345
	},
	media: {
		height: 200
	}
}));

const Product = (product) => {
	const [onMouse, setOnMouse] = useState(true);
	const {
		documentID,
		productThumbnail,
		productName,
		productBrand,
		avgTotal,
		numberVotesOwn,
		numberVotesNotOwn
	} = product;
	if (!documentID || !productThumbnail || !productName) return null;
	// eslint-disable-next-line
	const classes = useStyles();

	return (
		<Box className={classes.root} alt={productName}>
			{onMouse && (
				<CardMedia
					className={classes.media}
					image={productThumbnail}
					title="hello"
					onMouseEnter={() => setOnMouse(false)}
				/>
			)}
			{!onMouse && (
				<CardMedia
					className={classes.media}
					image={productThumbnail}
					title="hello"
					style={{ filter: "brightness(40%)" }}
					onMouseLeave={() => setOnMouse(true)}
				/>
			)}
		</Box>
	);
};

export default Product;

/* <Typography gutterBottom variant="h5" component="h2">
						{productBrand} - {productName}
					</Typography>
					<Typography>Score: {avgTotal}</Typography>
					<Typography>Votes: {numberVotesNotOwn + numberVotesOwn}</Typography> */

/* <Button
						component={NavLink}
						to={`/product/${documentID}`}
						size="small"
						color="secondary"
					>
						Vote Here
					</Button>; */
