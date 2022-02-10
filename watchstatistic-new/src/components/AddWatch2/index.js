import React from "react";
import "./styles.scss";
import Section1 from "./Section1";
import Grid from "@mui/material/Grid";

const AddWatch2 = () => {
	return (
		<div className="container">
			<Grid className="section" container justify="center">
				<Section1 />
			</Grid>
			<section>
				<p>2</p>
			</section>
			<section>
				<p>3</p>
			</section>
		</div>
	);
};

export default AddWatch2;
