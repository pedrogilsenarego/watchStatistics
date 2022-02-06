import React from "react";
import Header from "./../components/Header";
import Footer from "../components/Footer";

const HomepageLayout = (props) => {
	return (
		<div className="fullHeight">
			<Header {...props} />
			{props.children}
			<Footer {...props} />
		</div>
	);
};

export default HomepageLayout;
