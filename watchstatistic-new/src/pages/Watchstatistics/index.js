import React from "react";
import WatchstatisticsSubHeader from "../../components/watchstatisticsRooster/WatchstatisticsSubHeader";
import TableMain from "../../components/watchstatisticsRooster/TableMain";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const mapState = (state) => ({
	currentUser: state.user.currentUser
});

const img1 =
	"https://dlmag.com/wp-content/uploads/2020/08/How-to-start-luxury-watch-collection_img1.jpg";

const Watchstatistics = () => {
	const { currentUser } = useSelector(mapState);
	return (
		<div>
			{currentUser && <WatchstatisticsSubHeader {...currentUser} />}

			{!currentUser && (
				<Box style={{ height: "70vh", overflow: "hidden" }}>
					<Container
						style={{
							position: "absolute",
							zIndex: "2",
							marginTop: "20vh",
							marginLeft: "8vh",
							width: "45vw"
						}}
					>
						<Typography
							style={{
								fontWeight: "bold"
							}}
							variant="h3"
						>
							Find what enthusiasts think of every watch
						</Typography>
						<Typography variant="h6">
							A community where the data is added by the users gain points and
							build your own virtual collection while dooing so
						</Typography>
					</Container>
					<img
						style={{ filter: "grayscale(100%) brightness(0.4)" }}
						src={img1}
						alt=""
					/>
				</Box>
			)}

			<TableMain />
		</div>
	);
};

export default Watchstatistics;
