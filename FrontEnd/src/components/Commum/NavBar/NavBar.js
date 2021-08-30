import React from "react";
import { NavLink } from "react-router-dom";

import ToolBar from "@material-ui/core/ToolBar";
import { makeStyles } from "@material-ui/core/styles";
import { Button, AppBar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	rightItems: {},
	title: {
		flexGrow: 1,
		color: "#8E8D8D"
	}
}));

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
					<div>
						<Button activeStyle={activeStyle} component={NavLink} to="/" exact>
							Home
						</Button>

						<Button activeStyle={activeStyle} component={NavLink} to="/about">
							About
						</Button>
						<Button
							activeStyle={activeStyle}
							component={NavLink}
							to="/contacts"
						>
							Contacts
						</Button>
					</div>
					<div className={classes.rightItems}>
						<Button activeStyle={activeStyle} component={NavLink} to="/signup">
							Register
						</Button>
						<Button activeStyle={activeStyle} component={NavLink} to="/signin">
							Signin
						</Button>
					</div>
				</ToolBar>
			</AppBar>
		</div>
	);
}

export default Navbar;
