import React, { useEffect } from "react";
import { useHistory } from "react-router";
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
import { fetchProductsStart } from "../../../redux/Products/products.actions";

const useStyles = makeStyles((theme) => ({}));

const mapState = ({ productsData }) => ({
	products: productsData.products
});

// eslint-disable-next-line
const MainBody = ({}) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const history = useHistory();
	const pageSize = 5;

	const { products } = useSelector(mapState);

	const { data } = products;

	useEffect(
		() => {
			dispatch(fetchProductsStart(pageSize));
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
						Top 5 Watches
					</Typography>
					<TableContainer component={Paper} style={{ marginTop: "10px" }}>
						<Table aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell align="center" style={{ fontSize: "15px" }}>
										Watches
									</TableCell>

									<TableCell align="center" style={{ fontSize: "15px" }}>
										Score
									</TableCell>
									<TableCell align="center" style={{ fontSize: "15px" }}>
										Category
									</TableCell>
									<TableCell align="center" style={{ fontSize: "15px" }}>
										Votes
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{data.map((product) => {
									const {
										productName,
										productBrand,
										avgTotal,
										productCategory,
										numberVotesOwn,
										numberVotesNotOwn,
										documentID
									} = product;
									if (!productName) return null;
									return (
										<TableRow
											key={productName}
											style={{ cursor: "pointer" }}
											sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
											onClick={() => history.push(`/product/${documentID}`)}
										>
											<TableCell
												align="center"
												component="th"
												scope="row"
												style={{ color: "#ffffffB3" }}
											>
												{productBrand} - {productName}
											</TableCell>
											<TableCell align="center" style={{ color: "#ffffffB3" }}>
												{avgTotal} /10
											</TableCell>
											<TableCell align="center" style={{ color: "#ffffffB3" }}>
												{productCategory}
											</TableCell>
											<TableCell align="center" style={{ color: "#ffffffB3" }}>
												{numberVotesNotOwn + numberVotesOwn}
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

export default MainBody;
