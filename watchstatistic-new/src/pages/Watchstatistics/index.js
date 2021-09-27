import React from "react";
import WatchstatisticsSubHeader from "../../components/watchstatisticsRooster/WatchstatisticsSubHeader";
import MainBody from "../../components/watchstatisticsRooster/MainBody";
import MainUsers from "../../components/watchstatisticsRooster/MainUsers";

// eslint-disable-next-line
const Watchstatistics = ({}) => {
	return (
		<div>
			<WatchstatisticsSubHeader />
			<MainBody />
			<MainUsers />
		</div>
	);
};

export default Watchstatistics;
