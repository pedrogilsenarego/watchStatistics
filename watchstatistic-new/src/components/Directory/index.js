import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	box: {
		backgroundSize: "cover",
		height: "800px",
		backgroundRepeat: "no-repeat",

		backgroundImage: `url(${"https://hips.hearstapps.com/amv-prod-gp.s3.amazonaws.com/gearpatrol/wp-content/uploads/2018/12/Scuba-Diving-With-Seiko-SKX007-gear-patrol-lead-full.jpg?crop=0.6701030927835051xw:1xh;center,top&resize=980:*"})`
	},
	mainText: {
		color: "#FFFFFF",
		fontWeight: 600,
		padding: "100px",
		textShadow: "2px 4px 4px rgba(48,43,60)",
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
			<Link Link href="/product/ulgJqMRMtjojFERkj2vR" underline="none">
				<Typography className={classes.mainText} variant="h3" boxShadow={3}>
					Vote Now <br />
					for One of the Most Iconic Wacthes
					<br />
					Seiko SKX007
				</Typography>
			</Link>
		</Grid>
	);
};

export default Directory;
