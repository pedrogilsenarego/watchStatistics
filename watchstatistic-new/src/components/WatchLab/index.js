import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { useHistory } from "react-router";
import { Grid, Typography, Box, Paper, Button } from "@material-ui/core";

const mapState = (state) => ({
	currentUser: state.user.currentUser
});

const WatchLab = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	return (
		<div>
			<Grid container justify="center">
				<Paper style={{ width: "90vw", background: "#196B91" }}>
					<Box style={{ margin: "10px" }}></Box>
				</Paper>
			</Grid>
		</div>
	);
};

export default WatchLab;
