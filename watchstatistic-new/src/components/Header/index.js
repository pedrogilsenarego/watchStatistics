import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOutUserStart } from "./../../redux/User/user.actions";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	appbar: {
		flexGrow: 1,
		elevation: 0,
		background: "linear-gradient(180deg,#282432, #282432C7, #28243200)",
		height: "100px",
		"&:hover": {
			background: "linear-gradient(180deg,#282432, #28243280)"
		}
	},
	textBtn: {
		paddingTop: "20px",
		color: "#FFFFFF",
		fontSize: "13px",
		"&:hover": {
			color: "#FFA500"
		},
		"&:active": {
			color: "#FFFFFF"
		}
	},
	messages: { textAlign: "right", paddingTop: "10px" }
}));

const mapState = (state) => ({
	currentUser: state.user.currentUser
});

const Header = (props) => {
	const classes = useStyles();
	const activeStyle = { color: "#FFA500" };

	const dispatch = useDispatch();
	const { currentUser } = useSelector(mapState);

	const { displayName, userVotes, userRoles } = currentUser ? currentUser : 1;

	const signOut = () => {
		dispatch(signOutUserStart());
	};

	return (
		<div>
			<AppBar position="fixed" elevation={0} className={classes.appbar}>
				<Toolbar>
					<Grid item xs={12} sm={6}>
						<Button
							className={classes.textBtn}
							activeStyle={activeStyle}
							component={NavLink}
							to="/"
							exact
						>
							Home
						</Button>

						{currentUser && [
							<Button
								className={classes.textBtn}
								activeStyle={activeStyle}
								component={NavLink}
								to="/search"
								key={1}
							>
								Search
							</Button>,
							<Button
								className={classes.textBtn}
								activeStyle={activeStyle}
								component={NavLink}
								to="/dashboard"
								key={2}
							>
								My Account
							</Button>,
							<Button
								className={classes.textBtn}
								activeStyle={activeStyle}
								key={3}
								onClick={() => signOut()}
							>
								LogOut
							</Button>
						]}

						{!currentUser && [
							<Button
								className={classes.textBtn}
								activeStyle={activeStyle}
								component={NavLink}
								to="/registration"
								key={1}
							>
								Signup
							</Button>,
							<Button
								className={classes.textBtn}
								activeStyle={activeStyle}
								component={NavLink}
								to="/login"
								key={2}
							>
								Login
							</Button>
						]}
					</Grid>

					{currentUser && (
						<Grid item xs={12} sm={6} className={classes.messages}>
							<Grid item xs={12}>
								<Typography className={classes.text}>
									Hello, {displayName}
								</Typography>
							</Grid>
							<Grid item xs={12}>
								{(userVotes.length - 1 > 1 || userVotes.length - 1 === 0) && (
									<Typography className={classes.text}>
										You have voted on {userVotes.length - 1} watches
									</Typography>
								)}
								{userVotes.length - 1 === 1 && (
									<Typography className={classes.text}>
										You have voted on {userVotes.length - 1} watch
									</Typography>
								)}
								{!userRoles.includes("verified") && (
									<Typography style={{ color: "#FFA500" }}>
										VERIFY account to start voting for watches
									</Typography>
								)}
							</Grid>
						</Grid>
					)}
				</Toolbar>
			</AppBar>
		</div>
	);
};

Header.defaultProps = {
	currentUser: null
};

export default Header;
