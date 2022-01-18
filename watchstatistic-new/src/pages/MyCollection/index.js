import React from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";

import { updateCollectionStatus } from "../../redux/User/user.actions";

const mapState = (state) => ({
	currentUser: state.user.currentUser
});

const MyCollection = (props) => {
	const { currentUser } = useSelector(mapState);
	const history = useHistory();
	const dispatch = useDispatch();
	const list = currentUser.collection;
	const { collection, boosters } = currentUser;

	const handleWatch4Booster = (watchPos) => {
		const oldArray = collection;
		const boostersIncreased = boosters ? boosters + 1 : 1;
		oldArray.splice(watchPos, 1);
		const configData = {
			...currentUser,
			flag: "boosters",
			boosters: boostersIncreased,
			userID: currentUser.id,
			collection: oldArray
		};
		dispatch(updateCollectionStatus(configData));
	};

	return (
		<div>
			<Grid
				container
				spacing={2}
				style={{ marginTop: "100px" }}
				justifyContent="center"
			>
				<Grid item xs={12}>
					<Container style={{ backgroundColor: "#154A6799" }}>
						<Button style={{ color: "white" }}>All Watches</Button>
					</Container>
				</Grid>

				{list.map((item, pos) => (
					<Grid
						container
						spacing={0}
						direction="column"
						alignItems="center"
						justifyContent="center"
						key={item}
					>
						<ButtonGroup>
							<Button
								onClick={() => {
									history.push(`/product/${item[pos]}`);
								}}
							>
								{item}
							</Button>
							<Button
								onClick={() => {
									handleWatch4Booster(pos);
								}}
							>
								Trade this Watch for Boosters
							</Button>
						</ButtonGroup>
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default MyCollection;
