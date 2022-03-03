import React, { useState } from "react";
import { Typography, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	legend: {
		fontSize: 20,
		fontFamily: "MyFont",
		textAlign: "center"
	},
	text: {
		fontSize: 12,
		color: "#ffffffCE",
		textAlign: "left"
	}
}));

interface Iprops {
	title: string;
	message?: string;
}

const Item = ({ message, title }: Iprops) => {
	const [open, setOpen] = useState<boolean>(false);
	const classes = useStyles();

	return (
		<div>
			<MenuItem
				disableRipple
				onClick={() => {
					setOpen(!open);
				}}
			>
				<Typography className={classes.legend}>{title}</Typography>
			</MenuItem>
			{message && open && (
				<MenuItem style={{ whiteSpace: "normal" }}>
					<Typography className={classes.text}>{message}</Typography>
				</MenuItem>
			)}
		</div>
	);
};

export default Item;
