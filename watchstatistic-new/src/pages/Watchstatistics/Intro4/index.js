import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";

import { useHistory } from "react-router-dom";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@material-ui/core";

const svgVariants = {
	hidden: { rotate: -180 },
	visible: { rotate: 0, transition: { animation: 1 } }
};

const pathVariants = {
	hidden: {
		opacity: 0,
		pathLength: 0
	},
	visible: {
		opacity: 1,
		pathLength: 1,
		transition: {
			duration: 2,
			ease: "easeInOut"
		}
	}
};

const Intro4 = () => {
	const history = useHistory();
	const theme = useTheme();
	const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
	return (
		<Container
			maxWidth={isMatch ? "xs" : "sm"}
			style={{
				marginBottom: "200px",
				marginTop: isMatch ? "10vh" : "20vh",

				padding: "20px"
			}}
		>
			<motion.svg
				variants={svgVariants}
				initial="hidden"
				animate="visible"
				fill="hotPink"
				viewBox="0 0 7.52189 7.52189"
			>
				<motion.path
					variants={pathVariants}
					class="fil0 str0"
					d="m0.02098 3.76c0-2.0689 1.6752-3.7391 3.7409-3.7391s3.7391 1.6745 3.7391 3.7391-1.6711 3.7409-3.7391 3.7409-3.7409-1.672-3.7409-3.7409zm0.43697 0c0 1.8284 1.4754 3.3039 3.3039 3.3039 1.8284 0 3.3021-1.4769 3.3021-3.3039s-1.4752-3.3021-3.3021-3.3021c-1.827 0-3.3039 1.4737-3.3039 3.3021zm2.9469 0.0017833c0 0.19213 0.16377 0.35525 0.35525   "
				/>
			</motion.svg>
		</Container>
	);
};

export default Intro4;
