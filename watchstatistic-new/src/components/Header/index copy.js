import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOutUserStart } from "./../../redux/User/user.actions";
import "./styles.scss";

const mapState = (state) => ({
	currentUser: state.user.currentUser
});

const Header = (props) => {
	const location = useLocation();
	const [activeMenu, setActiveMenu] = useState(false);
	const dispatch = useDispatch();
	const { currentUser } = useSelector(mapState);

	const signOut = () => {
		dispatch(signOutUserStart());
	};

	useEffect(() => {
		setActiveMenu(false);
	}, [location]);

	return (
		<header className="header">
			<div className="wrap">
				<nav className={`mainMenu ${activeMenu ? "active" : ""}`}>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
					</ul>
				</nav>

				<div className="callToActions">
					<ul>
						{currentUser && [
							<li key={1}>
								<Link to="/search">
									Search<i class="fas fa-search"></i>
								</Link>
							</li>,
							<li key={2}>
								<Link to="/dashboard">
									My Account
									<i class="fas fa-user-circle"></i>
								</Link>
							</li>,
							<li key={3}>
								<span onClick={() => signOut()}>
									LogOut
									<i class="fas fa-sign-out-alt"></i>
								</span>
							</li>
						]}

						{!currentUser && [
							<li key={1} className="hideOnMobile">
								<Link to="/registration">Register</Link>
							</li>,
							<li key={2}>
								<Link to="/login">
									Login
									<i class="fas fa-user-circle"></i>
								</Link>
							</li>
						]}

						<li className="mobileMenu">
							<span onClick={() => setActiveMenu(!activeMenu)}>
								<i className="fas fa-bars"></i>
							</span>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};

Header.defaultProps = {
	currentUser: null
};

export default Header;
