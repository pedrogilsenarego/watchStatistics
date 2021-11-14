import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrderHistory } from "./../../redux/Orders/orders.actions";
import OrderHistory from "./../../components/OrderHistory";
import VisualPref from "./../../components/DashBoard/VisualPref";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const mapState = ({ user, ordersData }) => ({
	currentUser: user.currentUser,
	orderHistory: ordersData.orderHistory.data
});

const Dashboard = (props) => {
	const dispatch = useDispatch();
	const { currentUser, orderHistory } = useSelector(mapState);
	const [visualPref, setVisualPref] = useState(true);
	const [voteHistory, setVoteHistory] = useState(false);

	useEffect(
		() => {
			dispatch(getUserOrderHistory(currentUser.id));
		},
		// eslint-disable-next-line
		[]
	);

	const handleResetState = () => {
		setVoteHistory(false);
		setVisualPref(false);
	};

	return (
		<Container
			style={{
				marginTop: "120px",
				paddingTop: "20px",
				backgroundColor: "#196B91"
			}}
		>
			<Grid container>
				<Grid item md={2}>
					<Grid item xs={12}>
						<Button
							onClick={() => {
								handleResetState();
								setVisualPref(true);
							}}
						>
							Visual Preferences
						</Button>
					</Grid>
					<Grid item xs={12}>
						<Button
							onClick={() => {
								handleResetState();
								setVoteHistory(true);
							}}
						>
							Vote History
						</Button>
					</Grid>
				</Grid>
				<Grid item md={10}>
					<Box style={{ backgroundColor: "blue" }}>
						{visualPref && <VisualPref />}
						{voteHistory && <OrderHistory orders={orderHistory} />}
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Dashboard;
