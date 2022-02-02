import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { useHistory } from "react-router-dom";
import { BiAddToQueue, BiTrophy } from "react-icons/bi";
import { GoMirror } from "react-icons/go";
import { BsInboxesFill } from "react-icons/bs";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@material-ui/core";

const Intro3 = () => {
	const history = useHistory();
	const theme = useTheme();
	const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
	return (
		<Container
			maxWidth={isMatch ? "xs" : "sm"}
			style={{
				marginBottom: "200px",
				border: "solid 1.5px",
				borderColor: isMatch ? "black" : "hotPink",
				borderRadius: "10px",
				padding: "20px"
			}}
		>
			<Grid container spacing={4} style={{ padding: "20px" }}>
				<Grid
					item
					xs={6}
					style={{
						textAlign: "center",
						cursor: "pointer"
					}}
					onClick={() => history.push(`/watchstatistics/comparewatches`)}
				>
					<GoMirror fontSize={"4em"} color="hotPink" />
					<Typography style={{ color: "hotPink" }}>
						Compare your favorite Watches
					</Typography>
				</Grid>
				<Grid item xs={6} style={{ textAlign: "center" }}>
					<BiAddToQueue fontSize={"4em"} color="hotPink" />
					<Typography style={{ color: "hotPink" }}>
						Submit your favorite Watches
					</Typography>
				</Grid>
				<Grid item xs={6} style={{ textAlign: "center" }}>
					<BsInboxesFill fontSize={"4em"} color="hotPink" />
					<Typography style={{ color: "hotPink" }}>
						Build and trade virtual watches
					</Typography>
				</Grid>
				<Grid item xs={6} style={{ textAlign: "center" }}>
					<BiTrophy fontSize={"4em"} color="hotPink" />
					<Typography style={{ color: "hotPink" }}>
						Play games with your collection
					</Typography>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Intro3;
