import React, { useState } from "react";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, CardMedia, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	media: {
		height: 200
	},
	text: {
		color: "#FFFFFF",
		fontSize: "20px",
		textAlign: "center"
	}
}));

const Product = (product) => {
	const [onMouse, setOnMouse] = useState(true);
	const history = useHistory();

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
			{!onMouse && [
				<CardMedia
					className={classes.media}
					image={productThumbnail}
					style={{
						filter: "brightness(40%)",
						position: "relative",
						cursor: "pointer"
					}}
					onMouseLeave={() => setOnMouse(true)}
					onClick={() => history.push(`/product/${documentID}`)}
				/>,
				<Typography
					style={{
						transform: "translateY(-140px)",
						cursor: "pointer"
					}}
					className={classes.text}
					onMouseEnter={() => setOnMouse(false)}
					onClick={() => history.push(`/product/${documentID}`)}
				>
					{productBrand} - {productName}
				</Typography>,
				<Typography
					style={{
						transform: "translateY(-140px)",
						cursor: "pointer"
					}}
					className={classes.text}
					onMouseEnter={() => setOnMouse(false)}
					onClick={() => history.push(`/product/${documentID}`)}
				>
					Score: {avgTotal}
				</Typography>,
				<Typography
					style={{
						transform: "translateY(-140px)",
						cursor: "pointer"
					}}
					className={classes.text}
					onMouseEnter={() => setOnMouse(false)}
					onClick={() => history.push(`/product/${documentID}`)}
				>
					Votes: {numberVotesNotOwn + numberVotesOwn}
				</Typography>
			]}
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
