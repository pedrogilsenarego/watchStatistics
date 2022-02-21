import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Item from "./Item";

import { BiAddToQueue, BiTrophy } from "react-icons/bi";
import { GoMirror } from "react-icons/go";
import { BsInboxesFill } from "react-icons/bs";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@material-ui/core";

const Intro3 = () => {
	const theme = useTheme();
	const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
	return (
		<Container
			maxWidth={isMatch ? "xs" : "md"}
			style={{
				marginBottom: "200px",
				marginTop: isMatch ? "10vh" : "20vh"
			}}
		>
			<Grid container style={{ perspective: "50rem" }}>
				<Grid item xs={6} style={{ textTransform: "uppercase" }}>
					<Typography variant={"h4"} fontWeight={600}>
						Explore different features, a{" "}
					</Typography>
					<Typography
						fontWeight={600}
						variant={"h4"}
						style={{ color: "hotpink" }}
					>
						community
					</Typography>
					<Typography fontWeight={600} variant={"h4"}>
						{" "}
						project dynamic
					</Typography>
					<Typography>Share your ideas and help us to growth</Typography>
					<Button
						variant="contained"
						style={{
							backgroundImage:
								"linear-gradient(90deg, rgba(214,121,41,1) 50%, rgba(193,74,27,1) 100%)",
							marginTop: "5px"
						}}
					>
						Here
					</Button>
				</Grid>
				<Grid
					container
					item
					xs={6}
					spacing={1}
					style={{ transform: "rotateY(-40deg)" }}
				>
					<Item
						title="Compare Watches"
						path="/watchstatistics/comparewatches"
						icon={<GoMirror fontSize={"4em"} color="hotPink" />}
					/>
					<Item
						title="Submit new watches"
						icon={<BiAddToQueue fontSize={"4em"} color="hotPink" />}
					/>
					<Item
						title="Build and trade"
						icon={<BsInboxesFill fontSize={"4em"} color="hotPink" />}
					/>
					<Item
						title="Play games"
						icon={<BiTrophy fontSize={"4em"} color="hotPink" />}
					/>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Intro3;
