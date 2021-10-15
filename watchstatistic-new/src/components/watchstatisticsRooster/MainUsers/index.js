import React, { useEffect } from "react";

import {
	Table,
	TableContainer,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	Grid,
	Paper
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersStart } from "../../../redux/User/user.actions";

const useStyles = makeStyles((theme) => ({
	tableHead: {
		backgroundColor: "#145875 !important"
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
										Experience
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
												{experience}
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
