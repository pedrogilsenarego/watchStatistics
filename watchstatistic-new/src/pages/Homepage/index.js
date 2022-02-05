import React from "react";
import WatchstatisticsSubHeader from "../../components/watchstatisticsRooster/WatchstatisticsSubHeader";

import { useSelector } from "react-redux";
import HomePageComponent from "../../components/Homepage";

const mapState = (state) => ({
	currentUser: state.user.currentUser
});

const HomePage = () => {
	const { currentUser } = useSelector(mapState);
	return (
		<div>
			<WatchstatisticsSubHeader {...currentUser} />
			<HomePageComponent />
		</div>
	);
};

export default HomePage;
