import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import AddProduct from "./AddProduct";

const Prodsmart = () => {
	return (
		<div>
			<Paper
				style={{
					backgroundColor: "lightBlue",
					margin: "20px",
					padding: "20px"
				}}
			>
				<Grid container xs={12}>
					<Grid item xs={4}>
						<Typography variant="h4">Create new product</Typography>
						<AddProduct />
						<Typography variant="h4">Products in Stock</Typography>
					</Grid>
				</Grid>
			</Paper>
		</div>
	);
};

export default Prodsmart;
