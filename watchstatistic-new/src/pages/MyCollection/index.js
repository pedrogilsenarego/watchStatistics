import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";

const mapState = (state) => ({
	currentUser: state.user.currentUser
});

const MyCollection = (props) => {
	const { currentUser } = useSelector(mapState);
	const history = useHistory();
	const [list, setList] = useState(currentUser.collection);

	useEffect(() => {
		setList(currentUser.collection);
	}, [setList, currentUser.collection]);

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

				{list.map((collection, pos) => (
					<Grid
						container
						spacing={0}
						direction="column"
						alignItems="center"
						justifyContent="center"
					>
						<Button
							onClick={() => {
								history.push(`/product/${currentUser.collection[pos]}`);
							}}
						>
							{currentUser.collection[pos]}
						</Button>
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default MyCollection;
