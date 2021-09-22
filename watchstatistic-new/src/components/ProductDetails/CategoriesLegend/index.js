import React from "react";
import { Typography, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	menu: {
		"& .MuiPaper-root": {
			backgroundColor: "#04040680",
			color: "#ffffff",
			disableScrollLock: true,
			maxWidth: "350px"
		}
	},
	legend: {
		fontSize: 20,
		fontFamily: "MyFont"
	}
}));

// eslint-disable-next-line
const CategoriesLegend = ({}) => {
	const classes = useStyles();

	return (
		<div>
			<MenuItem disableRipple>
				<Typography className={classes.legend}>S aesthetics</Typography>
			</MenuItem>
			<MenuItem disableRipple>
				<Typography className={classes.legend}>M price/quality</Typography>
			</MenuItem>
			<MenuItem disableRipple>
				<Typography className={classes.legend}>L brand</Typography>
			</MenuItem>
			<MenuItem disableRipple>
				<Typography className={classes.legend}>K refinement</Typography>
			</MenuItem>
			<MenuItem disableRipple>
				<Typography className={classes.legend}>R history</Typography>
			</MenuItem>
			<MenuItem disableRipple>
				<Typography className={classes.legend}>Q engineering</Typography>
			</MenuItem>
			<MenuItem disableRipple>
				<Typography className={classes.legend}>O x-factor</Typography>
			</MenuItem>
		</div>
	);
};

export default CategoriesLegend;
