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
	const { currentUser } = useSelector(mapState);

	return (
		<div>
			<Grid container justify="center">
				<Paper style={{ width: "90vw", background: "#196B91" }}>
					<Grid container style={{ padding: "20px" }}>
						<Grid item xs={12}>
							<Typography variant="h5">
								Trade your points and build your watch collection
							</Typography>
							<Typography style={{ marginTop: "20px" }}>
								Current Points: {currentUser.points}{" "}
							</Typography>
						</Grid>
						<Grid item xs={12} style={{ marginTop: "30px" }}>
							<Box
								style={{
									border: "solid 2px",
									borderRadius: "4px",
									borderColor: "#ffffff66",
									background: "grey",
									padding: "10px"
								}}
							>
								<Grid container>
									<Grid item xs={3} style={{ textAlign: "center" }}>
										<Typography>Hello</Typography>
									</Grid>
									<Grid item xs={3} style={{ textAlign: "center" }}>
										<Typography>Hello</Typography>
									</Grid>
									<Grid item xs={3} style={{ textAlign: "center" }}>
										<Typography>Hello</Typography>
									</Grid>
									<Grid item xs={3} style={{ textAlign: "center" }}>
										<Typography>Hello</Typography>
									</Grid>
								</Grid>
							</Box>
						</Grid>
					</Grid>
				</Paper>
			</Grid>
		</div>
	);
};

export default WatchLab;
