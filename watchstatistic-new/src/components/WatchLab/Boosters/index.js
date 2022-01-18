import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import { Typography } from "@material-ui/core";

const Boosters = ({ cartBoosters }) => {
	return (
		<Paper style={{ padding: "10px" }}>
			<Grid container spacing={2}>
				<Grid item>
					<Box>
						<Typography style={{ color: "grey" }}>0-200€</Typography>
						{cartBoosters.a && (
							<div>
								<Typography style={{ color: "black" }}>
									{cartBoosters.a.productBrand} - {cartBoosters.a.productName}
								</Typography>
								<CardMedia
									style={{ height: "50px", width: "80px", borderRadius: "3px" }}
									image={cartBoosters.a.productThumbnail[0]}
								></CardMedia>
							</div>
						)}
						{!cartBoosters.a && (
							<div>
								<Button>Boost</Button>
							</div>
						)}
					</Box>
				</Grid>
				<Grid>
					<Box>
						<Typography style={{ color: "black" }}>200-500€</Typography>
						{cartBoosters.b && (
							<div>
								<Typography style={{ color: "black" }}>
									{cartBoosters.b.productBrand} - - {cartBoosters.b.productName}
								</Typography>
								<CardMedia
									style={{ height: "50px", width: "80px", borderRadius: "3px" }}
									image={cartBoosters.b.productThumbnail[0]}
								></CardMedia>
							</div>
						)}
						{!cartBoosters.b && (
							<div>
								<Button>Boost</Button>
							</div>
						)}
					</Box>
				</Grid>
				<Grid>
					<Box>
						<Typography style={{ color: "lightGreen" }}>500-1000€</Typography>
						{cartBoosters.c && (
							<div>
								<Typography style={{ color: "black" }}>
									{cartBoosters.c.productBrand} - {cartBoosters.c.productName}
								</Typography>
								<CardMedia
									style={{ height: "50px", width: "80px", borderRadius: "3px" }}
									image={cartBoosters.c.productThumbnail[0]}
								></CardMedia>
							</div>
						)}
						{!cartBoosters.c && (
							<div>
								<Button>Boost</Button>
							</div>
						)}
					</Box>
				</Grid>
				<Grid>
					<Box>
						<Typography style={{ color: "darkGreen" }}>1000-2000€</Typography>
						{cartBoosters.d && (
							<div>
								<Typography style={{ color: "black" }}>
									{cartBoosters.d.productBrand} - {cartBoosters.d.productName}
								</Typography>
								<CardMedia
									style={{ height: "50px", width: "80px", borderRadius: "3px" }}
									image={cartBoosters.d.productThumbnail[0]}
								></CardMedia>
							</div>
						)}
						{!cartBoosters.d && (
							<div>
								<Button>Boost</Button>
							</div>
						)}
					</Box>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default Boosters;
