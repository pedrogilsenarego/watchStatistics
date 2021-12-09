import React from "react";
import WatchstatisticsSubHeader from "../../components/watchstatisticsRooster/WatchstatisticsSubHeader";
import TableMain from "../../components/watchstatisticsRooster/TableMain";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";

const mapState = (state) => ({
	currentUser: state.user.currentUser
});
// eslint-disable-next-line
const Watchstatistics = ({}) => {
	const { currentUser } = useSelector(mapState);
	return (
		<div>
			{currentUser && <WatchstatisticsSubHeader {...currentUser} />}
			{!currentUser && <Box style={{ paddingTop: "100px" }}></Box>}
			<TableMain />
		</div>
	);
};

export default Watchstatistics;
