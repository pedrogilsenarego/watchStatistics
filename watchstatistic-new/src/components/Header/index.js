import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOutUserStart } from "./../../redux/User/user.actions";
import {
	Grid,
	MenuItem,
	Toolbar,
	AppBar,
	Button,
	Menu,
	useMediaQuery,
	useTheme
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { CgMenuGridO } from "react-icons/cg";
import { BsGraphUp } from "react-icons/bs";
import { AiOutlineCodeSandbox, AiOutlineInfoCircle } from "react-icons/ai";
import { VscHome } from "react-icons/vsc";

import Signup from "../Signup";
import SignIn from "../SignIn";

import RightIconsNoUser from "./RightIconsNoUser";
import RightIconsUser from "./RightIconsUser";
import LeftIcons from "./LeftIcons";
import RightIconsBigUser from "./RightIconsBigUser";

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
		marginTop: "70px",
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
	const [anchorLogin, setAnchorLogin] = useState(null);
	const [anchorSignup, setAnchorSignup] = useState(null);
	const [anchorMediaMenu, setAnchorMediaMenu] = useState(null);

	const [watchstatistics, setWatchstatistics] = useState(true);

	const dispatch = useDispatch();
	const { currentUser } = useSelector(mapState);
	const { userVotes, userRoles } = currentUser ? currentUser : 2;

	//RightIconsNoUser
	const handleSignupOpen = (e) => {
		setAnchorSignup(e.currentTarget);
	};
	const handleLoginOpen = (e) => {
		setAnchorLogin(e.currentTarget);
	};
	const configRightIconsNoUser = {
		handleSignupOpen,
		handleLoginOpen
	};

	//RightIconsUser
	const handleMessagesOpen = (e) => {
		setAnchorMessages(e.currentTarget);
	};
	const handleMyAccountOpen = (e) => {
		setAnchorMyAccount(e.currentTarget);
	};
	const configRightIconsUser = {
		handleMessagesOpen,
		handleMyAccountOpen,
		messageStatus
	};

	//leftIconst
	const handleSupportOpen = (e) => {
		setAnchorSupport(e.currentTarget);
	};
	const configLeftIcons = {
		watchstatistics,
		handleSupportOpen
	};

	//next
	const handleCloseMediaMenu = () => {
		setAnchorMediaMenu(null);
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

	const theme = useTheme();

	const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

	return (
		<div>
			<AppBar position="fixed" elevation={0} className={classes.appbar}>
				<Toolbar>
					{isMatch ? (
						<>
							<Grid item xs={12} md={6} className={classes.grid} align="left">
								<Button
									aria-controls="mediaMenu"
									disableRipple
									className={classes.textBtn}
									activeStyle={activeStyle}
									onClick={(e) => {
										setAnchorMediaMenu(e.currentTarget);
									}}
								>
									<CgMenuGridO fontSize="2.5em" />
								</Button>
							</Grid>
							<Grid item xs={12} md={6} align="right">
								{currentUser && <RightIconsUser {...configRightIconsUser} />}
								{!currentUser && (
									<RightIconsNoUser {...configRightIconsNoUser} />
								)}
							</Grid>
						</>
					) : (
						<>
							<Grid item xs={12} md={6} className={classes.grid} align="left">
								<LeftIcons {...configLeftIcons} />
							</Grid>
							<Grid item xs={12} md={6} align="right">
								{currentUser && <RightIconsBigUser {...configRightIconsUser} />}
								{!currentUser && (
									<RightIconsNoUser {...configRightIconsNoUser} />
								)}
							</Grid>{" "}
						</>
					)}
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
				{currentUser && (
					<MenuItem>Watches voted: {userVotes.length - 1}</MenuItem>
				)}
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
				id="mediaMenu"
				onClose={handleCloseMediaMenu}
				anchorEl={anchorMediaMenu}
				open={Boolean(anchorMediaMenu)}
			>
				<MenuItem
					className={classes.textBtn}
					activeStyle={activeStyle}
					component={NavLink}
					disableRipple
					to="/"
					exact
				>
					<VscHome fontSize="1.5em" />
					&nbsp;Home
				</MenuItem>
				<MenuItem
					disabled={watchstatistics}
					className={classes.textBtn}
					activeStyle={activeStyle}
					component={NavLink}
					disableRipple
					to="/search"
				>
					<BsGraphUp />
					&nbsp;WatchStatistics
				</MenuItem>
				<MenuItem
					className={classes.textBtn}
					activeStyle={activeStyle}
					disableRipple
				>
					<AiOutlineCodeSandbox fontSize="1.5em" /> &nbsp;WatchBoxes
				</MenuItem>
				<MenuItem
					aria-controls="support"
					disableRipple
					className={classes.textBtn}
					activeStyle={activeStyle}
					onClick={(e) => {
						setAnchorSupport(e.currentTarget);
					}}
				>
					<AiOutlineInfoCircle fontSize="1.5em" />
					&nbsp; About
				</MenuItem>
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
