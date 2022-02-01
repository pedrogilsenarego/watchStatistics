import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Intro2 = () => {
	return (
		<Container style={{ paddingTop: "15vh" }}>
			<Grid container>
				<Grid item xs={4}>
					<Typography
						variant={"h6"}
						color={"hotPink"}
						style={{ fontWeight: "600" }}
					>
						Find the most hot watches
					</Typography>
					<Typography variant={"h3"} style={{ fontWeight: "600" }}>
						Top most votes
					</Typography>
					<Typography
						variant={"subheader1"}
						style={{ fontWeight: "600", marginTop: "10px" }}
					>
						Find what are the top watches for different categories, price
						brackets and so much more
					</Typography>
				</Grid>
				<Grid item xs={8}></Grid>
			</Grid>
		</Container>
	);
};

export default Intro2;
