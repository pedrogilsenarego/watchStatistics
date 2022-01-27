import React from "react";
import WatchstatisticsSubHeader from "../../components/watchstatisticsRooster/WatchstatisticsSubHeader";
import TableMain from "../../components/watchstatisticsRooster/TableMain";
import { useSelector } from "react-redux";
import Intro from "./Intro";

const mapState = (state) => ({
	currentUser: state.user.currentUser
});

const Watchstatistics = () => {
	const { currentUser } = useSelector(mapState);
	return (
		<div>
			{!currentUser && <Intro />}
			{currentUser && <WatchstatisticsSubHeader {...currentUser} />}

			<TableMain />
		</div>
	);
};

export default Watchstatistics;
