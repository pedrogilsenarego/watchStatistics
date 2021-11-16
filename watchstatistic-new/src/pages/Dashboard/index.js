import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrderHistory } from "./../../redux/Orders/orders.actions";
import OrderHistory from "./../../components/OrderHistory";
import VisualPref from "./../../components/DashBoard/VisualPref";
import UserPref from "./../../components/DashBoard/UserPref";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const mapState = ({ user, ordersData }) => ({
	currentUser: user.currentUser,
	orderHistory: ordersData.orderHistory.data
});

const Dashboard = (props) => {
	const dispatch = useDispatch();
	const { currentUser, orderHistory } = useSelector(mapState);
	const [userPref, setUserPref] = useState(true);
	const [visualPref, setVisualPref] = useState(false);
	const [voteHistory, setVoteHistory] = useState(false);

	useEffect(
		() => {
			dispatch(getUserOrderHistory(currentUser.id));
		},
		// eslint-disable-next-line
		[]
	);

	const handleResetState = () => {
		setUserPref(false);
		setVoteHistory(false);
		setVisualPref(false);
	};

	return (
		<Grid
			container
			spacing={2}
			style={{ marginTop: "100px" }}
			justifyContent="center"
		>
			<Grid item xs={12}>
				<Container style={{ backgroundColor: "#154A6799" }}>
					<Button
						style={{ color: userPref ? "orange" : "white" }}
						onClick={() => {
							handleResetState();
							setUserPref(true);
						}}
					>
						User Preferences
					</Button>
					<Button
						style={{ color: visualPref ? "orange" : "white" }}
						onClick={() => {
							handleResetState();
							setVisualPref(true);
						}}
					>
						Visual Preferences
					</Button>

					<Button
						style={{ color: voteHistory ? "orange" : "white" }}
						onClick={() => {
							handleResetState();
							setVoteHistory(true);
						}}
					>
						Vote History
					</Button>
				</Container>
			</Grid>
			<Grid item xs={12} md={6}>
				{userPref && <UserPref />}
				{visualPref && <VisualPref />}
				{voteHistory && <OrderHistory orders={orderHistory} />}
			</Grid>
		</Grid>
	);
};

export default Dashboard;
