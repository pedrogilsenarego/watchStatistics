import React from "react";
import Directory from "./../../components/Directory";
import RadarChart from "../../components/RadarChart";
import "./styles.scss";

const Homepage = (props) => {
	return (
		<section className="homepage">
			<Directory />
			<RadarChart />
		</section>
	);
};

export default Homepage;
