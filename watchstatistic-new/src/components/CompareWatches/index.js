import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { Grid, Box, Paper, Button } from "@material-ui/core";
import { clearCart } from "../../redux/Cart/cart.actions";
import Item from "./Item";

const mapState = (state) => ({
	cartItems: state.cartData.cartItems
});

const errMsg = "You have no watches added";

const CompareWatches = () => {
	const dispatch = useDispatch();
	const { cartItems } = useSelector(mapState);

	const handleClearCart = () => {
		dispatch(clearCart());
	};

	return (
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
				<Paper style={{ background: "#196B91" }}>
					<Box>
						{cartItems && cartItems.length > 0 ? (
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
								</tbody>
							</table>
						) : (
							<p>{errMsg}</p>
						)}
						<Button
							onClick={() => {
								handleClearCart();
							}}
						>
							Clear Watches
						</Button>
					</Box>
				</Paper>
			</Grid>
			<Grid item xs={6}>
				<Paper style={{ background: "#196B91" }}>
					<Box>Hello</Box>
				</Paper>
			</Grid>
		</Grid>
	);
};

export default CompareWatches;
