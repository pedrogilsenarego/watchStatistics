import Button from "@mui/material/Button";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";

import Item from "./Item";

const mapState = (state) => ({
	currentUser: state.user.currentUser
});

const MyCollection = (props) => {
	const { currentUser } = useSelector(mapState);

	const list = currentUser.collection;

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

				{list.map((item, pos) => {
					const configItem = { item, pos };
					return <Item key={pos} {...configItem} />;
				})}
			</Grid>
		</div>
	);
};

export default MyCollection;
