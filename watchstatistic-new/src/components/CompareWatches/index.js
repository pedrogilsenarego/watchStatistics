import React from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import {
	selectCartItems,
	selectCartTotal
} from "../../redux/Cart/cart.selectors";
import { createStructuredSelector } from "reselect";

import { Grid, Box, Paper, Typography } from "@material-ui/core";
import Item from "./Item";

const mapState = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal
});

const errMsg = "You have no watches added";

const CompareWatches = () => {
	const history = useHistory();
	const { cartItems, total } = useSelector(mapState);
	return (
		<div>
			<Grid
				container
				spacing={2}
				justify="center"
				style={{
					paddingTop: "150px",
					paddingLeft: "100px",
					paddingRight: "100px"
				}}
			>
				<Grid item xs={6}>
					<div className="checkout">
						<h1>Checkout</h1>
						<div className="cart">
							{cartItems.length > 0 ? (
								<table border="0" cellPadding="0" cellSpacing="0">
									<tbody>
										<tr>
											<table
												className="checkoutHeader"
												border="0"
												cellPadding="10"
												cellSpacing="0"
											>
												<tbody>
													<tr>
														<th>Product</th>
														<th>Description</th>
														<th>Quantity</th>
														<th>Price</th>
														<th>Remove</th>
													</tr>
												</tbody>
											</table>
										</tr>

										<tr>
											<table border="0" cellSpacing="0" cellPadding="0">
												<tbody>
													{cartItems.map((item, pos) => {
														return (
															<tr key={pos}>
																<td>
																	<Item {...item} />
																</td>
															</tr>
														);
													})}
												</tbody>
											</table>
										</tr>

										<tr>
											<table
												align="right"
												border="0"
												cellSpacing="0"
												cellPadding="10"
											>
												<tr align="right">
													<td>
														<h3>Total: ${total}</h3>
													</td>
												</tr>
											</table>
										</tr>
									</tbody>
								</table>
							) : (
								<p>{errMsg}</p>
							)}
						</div>
					</div>
				</Grid>
				<Grid item xs={6}>
					<Paper style={{ background: "#196B91" }}>
						<Box>Hello</Box>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
};

export default CompareWatches;
