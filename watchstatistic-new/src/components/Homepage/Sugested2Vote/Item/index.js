import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const Item = ({ item, key }) => {
	return (
		<>
			<CardMedia
				style={{ width: "20vw" }}
				component="img"
				height="90vh"
				image={item.productThumbnail[0]}
				alt={item.productName}
			/>

			<Typography
				fontSize={"12px"}
				style={{ marginTop: "5px", fontWeight: "500" }}
			>
				{item.productBrand} {item.productName}: {item.reference}
			</Typography>
			<Typography fontSize={"12px"} style={{ color: "#ffffff66" }}>
				{item.userID} . Score: {item.avgTotal}
			</Typography>
		</>
	);
};

export default Item;
