import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOutUserStart } from "./../../redux/User/user.actions";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Menu from "@material-ui/core/Menu";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { MenuList } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	appbar: {
		flexGrow: 1,
		elevation: 0,
		background: "linear-gradient(180deg,#040406, #04040600)",
		height: "100px",
		"&:hover": {
			background: "linear-gradient(180deg,#040406, #04040680)"
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
	const [messageStatus, setMessageStatus] = useState(0);
	const [anchorMessages, setAnchorMessages] = useState(null);

	const dispatch = useDispatch();
	const { currentUser } = useSelector(mapState);
	const { displayName, userVotes, userRoles } = currentUser ? currentUser : 1;

	const handleMenuOpen = (e) => {
		setAnchorMessages(e.currentTarget);
	};

	const handleCloseMenu = () => {
		setAnchorMessages(null);
	};

	useEffect(
		() => {
			if (currentUser && userRoles.includes("non-verified")) {
				setMessageStatus(1);
			}
		},
		// eslint-disable-next-line
		[]
	);

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
								aria-controls="messages"
								className={classes.textBtn}
								activeStyle={activeStyle}
								key={2}
								onClick={handleMenuOpen}
							>
								Messages ({messageStatus})
							</Button>,
							<Button
								className={classes.textBtn}
								activeStyle={activeStyle}
								component={NavLink}
								to="/dashboard"
								key={3}
							>
								My Account
							</Button>,
							<Button
								className={classes.textBtn}
								activeStyle={activeStyle}
								key={4}
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
										VERIFY account to start voting
									</Typography>
								)}
							</Grid>
						</Grid>
					)}
				</Toolbar>
			</AppBar>
			<Menu
				id="messages"
				onClose={handleCloseMenu}
				anchorEl={anchorMessages}
				open={Boolean(anchorMessages)}
			>
				<MenuList onClick={handleCloseMenu}>
					VERIFY account to start voting
				</MenuList>
			</Menu>
		</div>
	);
};

Header.defaultProps = {
	currentUser: null
};

export default Header;
