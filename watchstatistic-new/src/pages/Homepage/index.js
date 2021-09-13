import React from "react";
import { useSelector } from "react-redux";
import Directory from "./../../components/Directory";
import SubHeader from "./../../components/SubHeader";

const mapState = (state) => ({
	currentUser: state.user.currentUser
});

const Homepage = (props) => {
	const { currentUser } = useSelector(mapState);
	return (
		<section className="homepage">
			<div>{currentUser && <SubHeader />}</div>
			<Directory />
		</section>
	);
};

export default Homepage;

//
