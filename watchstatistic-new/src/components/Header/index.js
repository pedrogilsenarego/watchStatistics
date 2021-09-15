import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOutUserStart } from "./../../redux/User/user.actions";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	appbar: {
		flexGrow: 1,
		elevation: 0,
		background: "linear-gradient(180deg,#282432, #2824320A)",
		height: "60px"
	},
	textBtn: {
		color: "#8E8D8D",
		fontSize: "13px",
		"&:hover": {
			color: "#FFFFFF"
		},
		"&:active": {
			color: "#FFFFFF"
		}
	}
}));

const mapState = (state) => ({
	currentUser: state.user.currentUser
});

const Header = (props) => {
	const classes = useStyles();
	const activeStyle = { color: "#FFFFFF" };
	const dispatch = useDispatch();
	const { currentUser } = useSelector(mapState);

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
					<div>
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
								exact
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
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
};

Header.defaultProps = {
	currentUser: null
};

export default Header;
