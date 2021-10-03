import React, { useState } from "react";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, CardMedia, Box, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {},
	media: {
		height: "45vh"
	},
	media2: {
		height: "45vh",
		"&:hover": {
			transform: "scale(1.2)",
			transition: "all 3s ease-in-out 50ms"
		}
	},
	imageWrapper: {
		overflow: "hidden",
		height: "45vh"
	},

	text: {
		color: "#FFFFFF",
		fontSize: "20px",
		textAlign: "center",
		fontFamily: "'Comfortaa', cursive"
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
					image={productThumbnail[0]}
					key={1}
					onClick={() => setOnMouse(false)}
					onMouseEnter={() => setOnMouse(false)}
				/>
			)}
			{!onMouse && (
				<div className={classes.imageWrapper}>
					<CardMedia
						className={classes.media2}
						image={productThumbnail[0]}
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
							{" "}
							<Grid container>
								<Typography
									style={{
										cursor: "pointer",
										paddingTop: "80px"
									}}
									key={2}
									className={classes.text}
									onMouseEnter={() => setOnMouse(false)}
									onClick={() => history.push(`/product/${documentID}`)}
								>
									<strong>{productBrand}:</strong> {productName}
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
									<strong>Score:</strong> {avgTotal}
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
									<strong>Votes:</strong> {numberVotesNotOwn + numberVotesOwn}
								</Typography>
							</Grid>
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
