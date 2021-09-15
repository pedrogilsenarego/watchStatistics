import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	box: {
		backgroundSize: "cover",
		height: "100vh",
		backgroundRepeat: "no-repeat",

		backgroundImage: `url(${"https://hips.hearstapps.com/amv-prod-gp.s3.amazonaws.com/gearpatrol/wp-content/uploads/2018/12/Scuba-Diving-With-Seiko-SKX007-gear-patrol-lead-full.jpg?crop=0.6701030927835051xw:1xh;center,top&resize=980:*"})`
	},
	mainText: {
		color: "#FFFFFF",
		fontSize: "40px",
		padding: "30px",
		"&:hover": {
			color: "#FFA500"
		}
	}
}));

const Directory = (props) => {
	const classes = useStyles();
	return (
		<Grid
			container
			className={classes.box}
			direction="column"
			justify="space-evenly"
		>
			<div className={classes.mainText}>
				<p>
					Vote Now <br />
					for One of the Most Iconic Wacthes
					<br />
					Seiko SKX007
				</p>
			</div>
		</Grid>
	);
};

export default Directory;
