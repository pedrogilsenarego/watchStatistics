import React, { useState } from "react";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, CardMedia, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {},
	media: {
		height: 200
	},
	media2: {
		height: 200,
		"&:hover": {
			transform: "scale(1.2)",
			transition: "all 3s ease-in-out 50ms"
		}
	},
	imageWrapper: {
		overflow: "hidden",
		height: 200,
		display: "inline - block"
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
					key={1}
					onClick={() => setOnMouse(false)}
					onMouseEnter={() => setOnMouse(false)}
				/>
			)}
			{!onMouse && (
				<div className={classes.imageWrapper}>
					<CardMedia
						className={classes.media2}
						image={productThumbnail}
						key={1}
						style={{
							position: "relative",

							cursor: "pointer"
						}}
						onMouseLeave={() => setOnMouse(true)}
						onClick={() => history.push(`/product/${documentID}`)}
					>
						{" "}
						<Box
							height={"100%"}
							bgcolor="#040406B3"
							style={{
								position: "relative",

								cursor: "pointer"
							}}
						>
							<Typography
								style={{
									cursor: "pointer",
									paddingTop: "60px"
								}}
								key={2}
								className={classes.text}
								onMouseEnter={() => setOnMouse(false)}
								onClick={() => history.push(`/product/${documentID}`)}
							>
								{productBrand} - {productName}
							</Typography>
							<Typography
								style={{
									cursor: "pointer"
								}}
								key={3}
								className={classes.text}
								onMouseEnter={() => setOnMouse(false)}
								onClick={() => history.push(`/product/${documentID}`)}
							>
								Score: {avgTotal}
							</Typography>
							<Typography
								style={{
									cursor: "pointer"
								}}
								key={4}
								className={classes.text}
								onMouseEnter={() => setOnMouse(false)}
								onClick={() => history.push(`/product/${documentID}`)}
							>
								Votes: {numberVotesNotOwn + numberVotesOwn}
							</Typography>
						</Box>
					</CardMedia>
				</div>
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
