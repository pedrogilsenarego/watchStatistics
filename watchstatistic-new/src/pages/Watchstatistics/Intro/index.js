import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import { AiOutlineDoubleLeft } from "react-icons/ai";

const img1 =
	"https://dlmag.com/wp-content/uploads/2020/08/How-to-start-luxury-watch-collection_img1.jpg";

const Intro = () => {
	return (
		<div>
			<Box style={{ height: "70vh", overflow: "hidden" }}>
				<Grid
					container
					style={{
						position: "absolute",
						zIndex: "2",
						marginTop: "20vh",
						marginLeft: "4vw",
						marginRight: "4vw"
					}}
				>
					<Grid item xs={10} sm={8} md={6} lg={5}>
						{" "}
						<Typography
							style={{
								fontWeight: "bold"
							}}
							variant="h3"
						>
							Find what enthusiasts think of every watch
						</Typography>
						<Typography variant="h6">
							Welcome to an open community where the opinion on each watch is
							added by their members. Gain points, build your own virtual
							collection and trade with other members.
						</Typography>
						<Grid item style={{ display: "flex" }}>
							<Button
								variant="contained"
								style={{
									backgroundImage:
										"linear-gradient(90deg, rgba(214,121,41,1) 50%, rgba(193,74,27,1) 100%)",
									marginTop: "5px"
								}}
							>
								Start Here
							</Button>
							<Box style={{ marginLeft: "10px", marginTop: "10px" }}>
								<AiOutlineDoubleLeft color={"lightGrey"} fontSize={"2em"} />
							</Box>
							<Box style={{ marginLeft: "10px", marginTop: "10px" }}>
								<AiOutlineDoubleLeft color={"lightGrey"} fontSize={"2em"} />
							</Box>
							<Box style={{ marginLeft: "10px", marginTop: "10px" }}>
								<AiOutlineDoubleLeft color={"lightGrey"} fontSize={"2em"} />
							</Box>
						</Grid>
					</Grid>
				</Grid>
				<img
					style={{ filter: "grayscale(100%) brightness(0.4)" }}
					src={img1}
					alt=""
				/>
			</Box>
		</div>
	);
};

export default Intro;
