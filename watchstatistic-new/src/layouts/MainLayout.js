import React from "react";
import Header from "./../components/Header";
import Footer from "./../components/Footer";

const MainLayout = (props) => {
	return (
		<div>
			<Header {...props} />
			{props.children}
			<Footer {...props} />
		</div>
	);
};

export default MainLayout;
