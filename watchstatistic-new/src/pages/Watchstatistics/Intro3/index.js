import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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
				marginTop: isMatch ? "10vh" : "20vh",
				perspective: "50rem"
			}}
		>
			<Grid container spacing={1} style={{ transform: "rotateY(-40deg)" }}>
				<Grid
					item
					xs={6}
					onClick={() => history.push(`/watchstatistics/comparewatches`)}
				>
					<Box
						style={{
							textAlign: "center",
							cursor: "pointer",
							border: "solid 1.5px",
							borderRadius: "10px",
							borderColor: "hotpink",
							padding: "10px"
						}}
					>
						<GoMirror fontSize={"4em"} color="hotPink" />
						<Typography style={{ color: "hotPink" }}>
							Compare Watches
						</Typography>
					</Box>
				</Grid>
				<Grid item xs={6}>
					<Box
						style={{
							textAlign: "center",
							cursor: "pointer",
							border: "solid 1.5px",
							borderRadius: "10px",
							borderColor: "hotpink",
							padding: "10px"
						}}
					>
						<BiAddToQueue fontSize={"4em"} color="hotPink" />
						<Typography style={{ color: "hotPink" }}>
							Submit new watches
						</Typography>
					</Box>
				</Grid>
				<Grid item xs={6}>
					<Box
						style={{
							textAlign: "center",
							cursor: "pointer",
							border: "solid 1.5px",
							borderRadius: "10px",
							borderColor: "hotpink",
							padding: "10px"
						}}
					>
						<BsInboxesFill fontSize={"4em"} color="hotPink" />
						<Typography style={{ color: "hotPink" }}>
							Build and trade
						</Typography>
					</Box>
				</Grid>
				<Grid item xs={6}>
					<Box
						style={{
							textAlign: "center",
							cursor: "pointer",
							border: "solid 1.5px",
							borderRadius: "10px",
							borderColor: "hotpink",
							padding: "10px"
						}}
					>
						<BiTrophy fontSize={"4em"} color="hotPink" />
						<Typography style={{ color: "hotPink" }}>Play games</Typography>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Intro3;
