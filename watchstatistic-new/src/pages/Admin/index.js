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
	Button,
	ButtonGroup
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import {
	fetchValidationProductsStart,
	addProductStart,
	deleteProductStart
} from "../../redux/Products/products.actions";

const useStyles = makeStyles((theme) => ({}));

const mapState = (state) => ({
	currentUser: state.user.currentUser,
	products: state.productsData.validationProducts
});

// eslint-disable-next-line
const Admin = ({}) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const history = useHistory();
	const pageSize = 5;

	const { products } = useSelector(mapState);

	const { data } = products;

	useEffect(
		() => {
			dispatch(fetchValidationProductsStart({ pageSize }));
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
					<TableContainer component={Paper} style={{ marginTop: "10px" }}>
						<Table aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell align="center" style={{ fontSize: "15px" }}>
										#
									</TableCell>
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
								{data.map((product, i) => {
									const {
										productName,
										productBrand,
										avgTotal,
										productCategory,
										documentID
									} = product;
									product.admin = true;
									if (!productName) return null;
									const color = "#ffffffB3";
									return (
										<TableRow
											key={productName}
											style={{ cursor: "pointer" }}
											sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
										>
											<TableCell align="center" style={{ color: color }}>
												{i + 1}
											</TableCell>
											<TableCell
												align="center"
												component="th"
												scope="row"
												style={{ color: color }}
												onClick={() => history.push(`/product/${documentID}`)}
											>
												{productBrand} - {productName}
											</TableCell>
											<TableCell align="center" style={{ color: color }}>
												{avgTotal} /10
											</TableCell>
											<TableCell align="center" style={{ color: color }}>
												{productCategory}
											</TableCell>
											<TableCell align="center" style={{ color: color }}>
												<ButtonGroup>
													<Button
														onClick={() => {
															delete product.documentID;
															dispatch(addProductStart(product));
															dispatch(deleteProductStart(documentID));
														}}
													>
														Approve
													</Button>
													<Button
														onClick={() =>
															dispatch(deleteProductStart(documentID))
														}
													>
														Delete
													</Button>
												</ButtonGroup>
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

export default Admin;
