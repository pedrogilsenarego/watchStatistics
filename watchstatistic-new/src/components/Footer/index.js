import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

const Footer = (props) => {
	return (
		<footer className="footer">
			<div className="wrap">
				<p>V1.1</p>
				<Link to="/changelog">ChangeLog</Link>
				<Link to="/resources">Resources</Link>
			</div>
		</footer>
	);
};

export default Footer;
