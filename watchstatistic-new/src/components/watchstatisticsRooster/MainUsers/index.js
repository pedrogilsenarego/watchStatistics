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
	Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersStart } from "../../../redux/User/user.actions";

const useStyles = makeStyles((theme) => ({}));

const mapState = (state) => ({
	users: state.user.users,
	products: state.productsData.products
});

// eslint-disable-next-line
const MainUsers = ({}) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const pageSize = 5;

	const { users } = useSelector(mapState);

	const { data } = users;

	useEffect(
		() => {
			dispatch(fetchUsersStart({ pageSize }));
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
				<Grid item xs={12} md={6}>
					<Typography variant={"h5"} align="center">
						Top 5 Users
					</Typography>
					<TableContainer component={Paper} style={{ marginTop: "10px" }}>
						<Table aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell align="center" style={{ fontSize: "15px" }}>
										Users
									</TableCell>

									<TableCell align="center" style={{ fontSize: "15px" }}>
										Number of Votes
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{data.map((product, i) => {
									const { displayName, userVotes } = product;

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
