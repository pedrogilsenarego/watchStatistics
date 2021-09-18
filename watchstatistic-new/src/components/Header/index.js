import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOutUserStart } from "./../../redux/User/user.actions";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { MenuItem } from "@material-ui/core";

import Signup from "../Signup";
import SignIn from "../SignIn";

const useStyles = makeStyles((theme) => ({
	appbar: {
		elevation: 0,
		background: "linear-gradient(180deg,#040406, #04040600)",
		height: "80px",
		paddingTop: "5px",

		"&:hover": {
			background: "linear-gradient(180deg,#040406, #04040680)"
		}
	},
	grid: {},
	textBtn: {
		color: "#FFFFFF",
		fontSize: "13px",
		"&:hover": {
			color: "#FFA500"
		},
		"&:active": {
			color: "#FFFFFF"
		}
	},

	menu: {
		marginTop: "60px",
		"& .MuiPaper-root": {
			backgroundColor: "#04040680",
			color: "#ffffff",
			disableScrollLock: true,
			maxWidth: "350px"
		}
	}
}));

const mapState = (state) => ({
	currentUser: state.user.currentUser
});

const Header = (props) => {
	const classes = useStyles();
	const history = useHistory();
	const activeStyle = { color: "#FFA500" };
	const [messageStatus, setMessageStatus] = useState(0);
	const [anchorMessages, setAnchorMessages] = useState(null);
	const [anchorSupport, setAnchorSupport] = useState(null);
	const [anchorMyAccount, setAnchorMyAccount] = useState(null);
	const [anchorUser, setAnchorUser] = useState(null);
	const [anchorLogin, setAnchorLogin] = useState(null);
	const [anchorSignup, setAnchorSignup] = useState(null);

	const [watchstatistics, setWatchstatistics] = useState(true);

	const dispatch = useDispatch();
	const { currentUser } = useSelector(mapState);
	const { displayName, userVotes, userRoles } = currentUser ? currentUser : 1;

	const handleMenuLoginOpen = (e) => {
		setAnchorLogin(e.currentTarget);
	};

	const handleCloseLoginMenu = () => {
		setAnchorLogin(null);
	};

	const configMenuLogin = {
		handleCloseLoginMenu
	};

	const handleCloseSignupMenu = () => {
		setAnchorSignup(null);
	};

	const handleCloseMessagesMenu = () => {
		setAnchorMessages(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorUser(null);
	};

	const handleCloseMyAccountMenu = () => {
		setAnchorMyAccount(null);
	};

	const handleCloseSupportMenu = () => {
		setAnchorSupport(null);
	};

	useEffect(
		() => {
			if (currentUser && userRoles.includes("non-verified")) {
				setMessageStatus(1);
			}
		},
		// eslint-disable-next-line
		[currentUser]
	);

	useEffect(
		() => {
			if (currentUser && userRoles.includes("verified")) {
				setWatchstatistics(false);
			}
		},
		// eslint-disable-next-line
		[currentUser]
	);

	const signOut = () => {
		dispatch(signOutUserStart());
		setWatchstatistics(true);
	};

	return (
		<div>
			<AppBar position="fixed" elevation={0} className={classes.appbar}>
				<Toolbar>
					<Grid item xs={12} md={6} className={classes.grid} align="left">
						<Button
							className={classes.textBtn}
							activeStyle={activeStyle}
							component={NavLink}
							disableRipple
							to="/"
							exact
						>
							Home
						</Button>

						<Button
							disabled={watchstatistics}
							className={classes.textBtn}
							activeStyle={activeStyle}
							component={NavLink}
							disableRipple
							to="/search"
						>
							WatchStatistics
						</Button>
						<Button
							className={classes.textBtn}
							activeStyle={activeStyle}
							disableRipple
						>
							WatchBoxes
						</Button>

						<Button
							aria-controls="support"
							disableRipple
							className={classes.textBtn}
							activeStyle={activeStyle}
							onClick={(e) => {
								setAnchorSupport(e.currentTarget);
							}}
						>
							About
						</Button>
					</Grid>
					<Grid item xs={12} md={6} align="right">
						{currentUser && [
							<Button
								aria-controls="messages"
								className={classes.textBtn}
								activeStyle={activeStyle}
								disableRipple
								onClick={(e) => {
									setAnchorMessages(e.currentTarget);
								}}
							>
								Messages ({messageStatus})
							</Button>,
							<Button
								className={classes.textBtn}
								activeStyle={activeStyle}
								aria-controls="myAccount"
								disableRipple
								onClick={(e) => {
									setAnchorMyAccount(e.currentTarget);
								}}
							>
								My Account
							</Button>,
							<Button
								className={classes.textBtn}
								activeStyle={activeStyle}
								aria-controls="user"
								disableRipple
								onClick={(e) => {
									setAnchorUser(e.currentTarget);
								}}
							>
								{displayName}
							</Button>
						]}
						{!currentUser && [
							<Button
								aria-controls="signup"
								disableRipple
								className={classes.textBtn}
								activeStyle={activeStyle}
								onClick={(e) => {
									setAnchorSignup(e.currentTarget);
								}}
							>
								Signup
							</Button>,
							<Button
								aria-controls="login"
								disableRipple
								className={classes.textBtn}
								activeStyle={activeStyle}
								onClick={handleMenuLoginOpen}
							>
								Login
							</Button>
						]}
					</Grid>
				</Toolbar>
			</AppBar>
			<Menu
				disableScrollLock
				className={classes.menu}
				style={{}}
				id="messages"
				onClose={handleCloseMessagesMenu}
				anchorEl={anchorMessages}
				open={Boolean(anchorMessages)}
			>
				{messageStatus === 1 && (
					<MenuItem
						style={{ color: "#FFA500" }}
						onClick={handleCloseMessagesMenu}
					>
						VERIFY account to use WatchStatistics
					</MenuItem>
				)}
			</Menu>
			<Menu
				disableScrollLock
				className={classes.menu}
				id="support"
				onClose={handleCloseSupportMenu}
				anchorEl={anchorSupport}
				open={Boolean(anchorSupport)}
			>
				<MenuItem onClick={handleCloseSupportMenu}>Contact Us</MenuItem>
				<MenuItem onClick={handleCloseSupportMenu}>Privacy Policy</MenuItem>
				<MenuItem onClick={handleCloseSupportMenu}>FAQ</MenuItem>
				<MenuItem onClick={handleCloseSupportMenu}>
					Terms and Conditions
				</MenuItem>
			</Menu>
			<Menu
				disableScrollLock
				className={classes.menu}
				id="MyAccount"
				onClose={handleCloseMyAccountMenu}
				anchorEl={anchorMyAccount}
				open={Boolean(anchorMyAccount)}
			>
				<MenuItem
					onClick={() => {
						history.push("/dashboard");
					}}
				>
					DashBoard
				</MenuItem>

				<MenuItem
					onClick={() => {
						signOut();
						handleCloseMyAccountMenu();
					}}
				>
					Logout
				</MenuItem>
			</Menu>
			<Menu
				disableScrollLock
				className={classes.menu}
				id="User"
				onClose={handleCloseUserMenu}
				anchorEl={anchorUser}
				open={Boolean(anchorUser)}
			>
				{currentUser && (
					<MenuItem>Watches voted: {userVotes.length - 1}</MenuItem>
				)}
			</Menu>
			<Menu
				disableScrollLock
				className={classes.menu}
				id="login"
				onClose={handleCloseLoginMenu}
				anchorEl={anchorLogin}
				open={Boolean(anchorLogin)}
			>
				<MenuItem disableRipple>
					<SignIn {...configMenuLogin} />
				</MenuItem>
			</Menu>
			<Menu
				disableRipple
				disableScrollLock
				className={classes.menu}
				id="signup"
				onClose={handleCloseSignupMenu}
				anchorEl={anchorSignup}
				open={Boolean(anchorSignup)}
			>
				<MenuItem disableRipple>
					<Signup />
				</MenuItem>
			</Menu>
		</div>
	);
};

Header.defaultProps = {
	currentUser: null
};

export default Header;
