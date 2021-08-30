import React from "react";
import { NavLink } from "react-router-dom";

import ToolBar from "@material-ui/core/ToolBar";
import { makeStyles } from "@material-ui/core/styles";
import { Button, AppBar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	title: {
		flexGrow: 1,
		color: "#8E8D8D"
	}
}));

const user = "pedro";

function Navbar() {
	const classes = useStyles();
	const activeStyle = { color: "#8E8D8D" };

	return (
		<div className={classes.root}>
			<AppBar
				color="secondary"
				elevation={0}
				style={{ background: "transparent" }}
			>
				<ToolBar>
					<Button activeStyle={activeStyle} component={NavLink} to="/" exact>
						Home
					</Button>
					<Button activeStyle={activeStyle} component={NavLink} to="/index">
						Index
					</Button>
					<Button activeStyle={activeStyle} component={NavLink} to="/about">
						About
					</Button>
					<Button activeStyle={activeStyle} component={NavLink} to="/contacts">
						Contacts
					</Button>
					<Button activeStyle={activeStyle} component={NavLink} to="/signup">
						Signup
					</Button>
					<Typography variant="h6" className={classes.title}>
						{user}
					</Typography>
				</ToolBar>
			</AppBar>
		</div>
	);
}

export default Navbar;
