import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

const Footer = (props) => {
	return (
		<footer className="footer">
			<div className="wrap">
				<Link to="/changelog">ChangeLog</Link>
			</div>
		</footer>
	);
};

export default Footer;
