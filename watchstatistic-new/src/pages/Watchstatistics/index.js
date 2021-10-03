import React from "react";
import WatchstatisticsSubHeader from "../../components/watchstatisticsRooster/WatchstatisticsSubHeader";
import MainBody from "../../components/watchstatisticsRooster/MainBody";
import MainUsers from "../../components/watchstatisticsRooster/MainUsers";
import LatestAdditions from "../../components/watchstatisticsRooster/LatestAdditions";

// eslint-disable-next-line
const Watchstatistics = ({}) => {
	return (
		<div>
			<WatchstatisticsSubHeader />
			<MainBody />
			<MainUsers />
			<LatestAdditions />
		</div>
	);
};

export default Watchstatistics;
