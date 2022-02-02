import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Display from "./Display";
import { useHistory } from "react-router-dom";
import { AiOutlineDoubleRight } from "react-icons/ai";

const Intro2 = () => {
	const history = useHistory();
	return (
		<Container maxWidth={"md"} style={{ paddingTop: "15vh" }}>
			<Grid container spacing={5}>
				<Grid item xs={12} md={8}>
					<Display />
				</Grid>
				<Grid item xs={12} md={4}>
					<Typography
						variant={"h5"}
						color={"hotPink"}
						style={{ fontWeight: "600" }}
					>
						Find the hottest watches
					</Typography>
					<Typography variant={"h3"} style={{ fontWeight: "600" }}>
						Top most voted
					</Typography>
					<Typography variant={"subheader1"} style={{}}>
						What are the top watches for different categories, price brackets,
						brands and so much more
					</Typography>
					<Box
						style={{ display: "flex", marginTop: "20px", cursor: "pointer" }}
					>
						<Typography
							onClick={() => history.push(`/search/`)}
							variant={"h6"}
							style={{}}
						>
							Check here{" "}
						</Typography>
						<AiOutlineDoubleRight
							color={"hotPink"}
							fontSize={"2em"}
							style={{ marginLeft: "10px" }}
						/>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Intro2;
