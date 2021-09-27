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
import { fetchProductsStart } from "../../../redux/Products/products.actions";

const useStyles = makeStyles((theme) => ({}));

const mapState = ({ productsData }) => ({
	products: productsData.products
});

// eslint-disable-next-line
const MainBody = ({}) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const pageSize = 5;

	const { products } = useSelector(mapState);

	const { data } = products;

	useEffect(
		() => {
			dispatch(fetchProductsStart({ pageSize }));
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
			<Grid container className={classes.container}>
				<Grid item xs={12} md={6}>
					<Typography variant={"h5"}>Top 5 Watches</Typography>
					<TableContainer component={Paper}>
						<Table aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell align="center">Watches</TableCell>

									<TableCell align="center">Score</TableCell>
									<TableCell align="center">Category</TableCell>
									<TableCell align="center">Votes</TableCell>
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
										numberVotesNotOwn
									} = product;
									if (!productName) return null;
									return (
										<TableRow
											key={productName}
											sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
										>
											<TableCell align="center" component="th" scope="row">
												{productBrand} - {productName}
											</TableCell>
											<TableCell align="center">{avgTotal} /10</TableCell>
											<TableCell align="center">{productCategory}</TableCell>
											<TableCell align="center">
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
