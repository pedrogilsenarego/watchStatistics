import React, { useEffect } from "react";

import {
	Table,
	TableContainer,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	Grid,
	Paper,
	Box
} from "@material-ui/core";
import LinearProgress, {
	linearProgressClasses
} from "@mui/material/LinearProgress";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersStart } from "../../../redux/User/user.actions";
import { styled } from "@mui/material/styles";

const useStyles = makeStyles((theme) => ({
	tableHead: {
		backgroundColor: "#145875 !important"
	}
}));

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
	height: 4,
	borderRadius: 5,
	[`&.${linearProgressClasses.colorPrimary}`]: {
		backgroundColor: "#ffffff"
	},
	[`& .${linearProgressClasses.bar}`]: {
		borderRadius: 5,
		backgroundColor: "red"
	}
}));

const mapState = (state) => ({
	users: state.user.users,
	products: state.productsData.products
});

// eslint-disable-next-line
const MainUsers = ({ handleLoadedTopUsers, loadedTopUsers }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const pageSize = 5;

	const { users } = useSelector(mapState);

	const { data } = users;

	useEffect(
		() => {
			if (!loadedTopUsers) {
				dispatch(fetchUsersStart({ pageSize }));
				handleLoadedTopUsers();
			}
		},
		// eslint-disable-next-line
		[]
	);

	if (!Array.isArray(data)) return null;

	if (data.length < 1) {
		return (
			<div>
				<p>No search Results</p>
			</div>
		);
	}

	return (
		<div>
			<Grid container className={classes.container} style={{ padding: "20px" }}>
				<Grid item xs={12} md={8}>
					<TableContainer component={Paper} style={{ marginTop: "10px" }}>
						<Table aria-label="simple table" size="small">
							<TableHead className={classes.tableHead}>
								<TableRow>
									<TableCell align="center" style={{ fontSize: "15px" }}>
										#
									</TableCell>
									<TableCell align="center" style={{ fontSize: "15px" }}>
										Users
									</TableCell>
									<TableCell align="center" style={{ fontSize: "15px" }}>
										Rank
									</TableCell>
									<TableCell align="center" style={{ fontSize: "15px" }}>
										Progress
									</TableCell>
									<TableCell align="center" style={{ fontSize: "15px" }}>
										Number of Votes
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{data.map((product, i) => {
									const { displayName, userVotes, experience } = product;

									const rank = () => {
										if (!experience) return;
										if (experience < 20) return "Noob";
										if (experience < 100) return "Begginer";
										if (experience < 200) return "Watch Enthusiast";
										if (experience < 500) return "Mature Watch Enthusiast";
										if (experience < 1500) return "Watch Connoisseour";
										if (experience < 5000) return "Watch Geek Legend";
										else return "Watch God";
									};
									const progress = () => {
										if (experience < 20) return (experience / 20) * 100;
										if (experience < 100) return ((experience - 20) / 80) * 100;

										if (experience < 200)
											return ((experience - 100) / 100) * 100;

										if (experience < 500)
											return ((experience - 200) / 300) * 100;

										if (experience < 1500)
											return ((experience - 500) / 1000) * 100;

										if (experience < 5000)
											return ((experience - 1500) / 3500) * 100;
										else return 100;
									};

									return (
										<TableRow
											key={displayName}
											sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
										>
											<TableCell align="center" style={{ color: "#ffffffB3" }}>
												{i + 1}
											</TableCell>
											<TableCell
												align="center"
												component="th"
												scope="row"
												style={{ color: "#ffffffB3" }}
											>
												{displayName}
											</TableCell>
											<TableCell
												align="center"
												component="th"
												scope="row"
												style={{ color: "#ffffffB3" }}
											>
												{rank()}
											</TableCell>
											<TableCell align="center" style={{ color: "#ffffffB3" }}>
												<Box
													sx={{
														display: "flex",
														justifyContent: "center",
														paddingTop: "10px"
													}}
												>
													<BorderLinearProgress
														style={{ width: "75%" }}
														variant="determinate"
														value={progress()}
													/>
												</Box>
											</TableCell>
											<TableCell align="center" style={{ color: "#ffffffB3" }}>
												{userVotes.length - 1}
											</TableCell>
										</TableRow>
									);
								})}
							</TableBody>
						</Table>
					</TableContainer>
				</Grid>
			</Grid>
		</div>
	);
};

export default MainUsers;
