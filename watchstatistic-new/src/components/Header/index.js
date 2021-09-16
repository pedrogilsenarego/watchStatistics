import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOutUserStart } from "./../../redux/User/user.actions";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import { makeStyles } from "@material-ui/core/styles";
import { MenuItem } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	appbar: {
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
	messages: { textAlign: "right", paddingTop: "10px" },
	menu: {
		marginTop: "60px",
		"& .MuiPaper-root": {
			backgroundColor: "#04040680",
			color: "#ffffff",
			disableScrollLock: true
		},
		disableRipple: true
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

	const dispatch = useDispatch();
	const { currentUser } = useSelector(mapState);
	const { displayName, userVotes, userRoles } = currentUser ? currentUser : 1;

	const handleMenuMessagesOpen = (e) => {
		setAnchorMessages(e.currentTarget);
	};

	const handleCloseMessagesMenu = () => {
		setAnchorMessages(null);
	};

	const handleMenuMyAccountOpen = (e) => {
		setAnchorMyAccount(e.currentTarget);
	};

	const handleCloseMyAccountMenu = () => {
		setAnchorMyAccount(null);
	};

	const handleMenuSupportOpen = (e) => {
		setAnchorSupport(e.currentTarget);
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
		[]
	);

	const signOut = () => {
		dispatch(signOutUserStart());
	};

	return (
		<div>
			<AppBar position="fixed" elevation={0} className={classes.appbar}>
				<Toolbar>
					<Button
						className={classes.textBtn}
						activeStyle={activeStyle}
						component={NavLink}
						to="/"
						exact
					>
						Home
					</Button>
					<Button
						aria-controls="support"
						disableRipple
						className={classes.textBtn}
						activeStyle={activeStyle}
						onClick={handleMenuSupportOpen}
					>
						Support
					</Button>

					{currentUser && [
						<Button
							className={classes.textBtn}
							activeStyle={activeStyle}
							component={NavLink}
							to="/search"
						>
							Browse
						</Button>,

						<Button
							aria-controls="messages"
							className={classes.textBtn}
							activeStyle={activeStyle}
							disableRipple
							onClick={handleMenuMessagesOpen}
						>
							Messages ({messageStatus})
						</Button>,
						<Button
							className={classes.textBtn}
							activeStyle={activeStyle}
							aria-controls="myAccount"
							disableRipple
							onClick={handleMenuMyAccountOpen}
						>
							{displayName}
						</Button>
					]}

					{!currentUser && [
						<Button
							className={classes.textBtn}
							activeStyle={activeStyle}
							component={NavLink}
							to="/registration"
						>
							Signup
						</Button>,
						<Button
							className={classes.textBtn}
							activeStyle={activeStyle}
							component={NavLink}
							to="/login"
						>
							Login
						</Button>
					]}
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
						VERIFY account to start voting
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
				{currentUser && <MenuItem>Votes: {userVotes.length - 1}</MenuItem>}
				<MenuItem
					onClick={() => {
						signOut();
						handleCloseMyAccountMenu();
					}}
				>
					Logout
				</MenuItem>
			</Menu>
		</div>
	);
};

Header.defaultProps = {
	currentUser: null
};

export default Header;
