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
import { useParams } from "react-router";
import { fetchProductsStart } from "../../../redux/Products/products.actions";

const useStyles = makeStyles((theme) => ({
	root: {},
	container: {
		textAlign: "center"
	},
	item: {},
	text: {}
}));

const mapState = ({ productsData }) => ({
	products: productsData.products
});

// eslint-disable-next-line
const MainBody = ({}) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const { filterType } = useParams();
	const filter = "productCategory";
	const pageSize = 5;

	const { products } = useSelector(mapState);

	const { data } = products;

	const { productName } = data;

	useEffect(
		() => {
			dispatch(fetchProductsStart({ filterType, filter, pageSize }));
		},
		// eslint-disable-next-line
		[filterType]
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
				<Grid item xs={6}>
					<Typography variant={"h5"}>Top 5 Watches</Typography>
					<Typography variant={"h5"}>{productName}</Typography>
					<TableContainer component={Paper}>
						<Table sx={{ minWidth: 650 }} aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell>Watches</TableCell>

									<TableCell align="right">Score</TableCell>
									<TableCell align="right">Category</TableCell>
									<TableCell align="right">Votes</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{data.map((product, pos) => {
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
											<TableCell component="th" scope="row">
												{productBrand} - {productName}
											</TableCell>
											<TableCell align="right">{avgTotal} /10</TableCell>
											<TableCell align="right">{productCategory}</TableCell>
											<TableCell align="right">
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
