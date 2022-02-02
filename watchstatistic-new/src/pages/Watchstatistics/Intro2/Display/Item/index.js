import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useHistory } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import { Typography } from "@material-ui/core";

const Item = ({ item, pos, filterType }) => {
	const history = useHistory();

	return (
		<Grid item xs={6}>
			<Paper
				onClick={() => {
					history.push(`/product/${item.documentID}`);
				}}
				style={{
					height: "120px",
					backgroundColor: "#18161E",
					padding: "10px",
					cursor: "pointer"
				}}
			>
				<Grid item container>
					<Grid item xs={8}>
						<Typography style={{ color: "hotPink" }}>
							{filterType} #{pos + 1}
						</Typography>
						<Typography style={{ color: "white" }}>
							{item.productBrand} {item.productName}
						</Typography>
						<Typography style={{ color: "#ffffff66" }}>
							{item.reference}
						</Typography>
					</Grid>
					<Grid item xs={4}>
						<CardMedia
							component="img"
							height="80"
							image={item.productThumbnail[0]}
							alt={item.productName}
							style={{ borderRadius: "8px" }}
						/>
					</Grid>
				</Grid>
			</Paper>
		</Grid>
	);
};

export default Item;
