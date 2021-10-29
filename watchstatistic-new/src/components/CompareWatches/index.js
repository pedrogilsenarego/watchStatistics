import React from "react";
import RadarChart from "../RadarChart";

import { useSelector, useDispatch } from "react-redux";
import {
	Table,
	TableContainer,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	Grid,
	Paper,
	Button
} from "@material-ui/core";

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

	const configRadarChart = {
		data: {
			//"Quality", "Price", "Brand", "Refinement", "History", "Engineering", "X-Factor"
			labels: ["S", "M", "L", "K", "R", "Q", "O"],
			datasets: [
				{
					data: [2, 5, 6, 7, 8, 9, 8],
					label: "Own",

					borderColor: "#42e6f5",
					backgroundColor: "#42e6f566",
					fill: true
				},
				{
					data: [2, 5, 6, 7, 8, 9, 8],
					label: "Not Own",
					borderColor: "#E5F517",
					fill: true,
					backgroundColor: "#E5F51766"
				}
			]
		},

		options: {
			plugins: {
				tooltip: {
					displayColors: false,
					titleAlign: "center",
					bodyAlign: "center",
					titleColor: "#ffffff",
					bodyColor: "#ffffffDB",
					callbacks: {
						title: function (item, everything) {
							if (item[0].label === "Q") {
								return "Engineering";
							}
							if (item[0].label === "S") {
								return "Aesthetics";
							}
							if (item[0].label === "M") {
								return "Price over Quality";
							}
							if (item[0].label === "L") {
								return "Brand";
							}
							if (item[0].label === "K") {
								return "Refinement";
							}
							if (item[0].label === "R") {
								return "History";
							}
							if (item[0].label === "O") {
								return "X-Factor";
							}
							return;
						}
					}
				},
				legend: {
					position: "bottom",

					labels: {
						color: "#dcdae0",
						boxWidth: 20,
						padding: 20,
						font: {
							size: 12
						}
					}
				}
			},
			scales: {
				r: {
					grid: {
						color: "#dcdae066"
					},
					pointLabels: {
						color: "#dcdae0",

						font: {
							family: "MyFont",
							size: 15
						}
					},
					angleLines: { color: "#dcdae066" },
					suggestedMin: 0,
					suggestedMax: 10,
					ticks: {
						stepSize: 2,
						color: "#ffffff",
						backdropColor: "#dcdae005"
					}
				}
			},

			animations: {
				tension: {
					duration: 700,
					easing: "linear",
					from: 0.05,
					to: 0,
					loop: true
				}
			}
		}
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
					{cartItems && cartItems.length > 0 ? (
						<TableContainer>
							<Table size="small" border="0" aria-label="simple table">
								<TableHead>
									<TableRow>
										<TableCell align="center" style={{ fontSize: "15px" }}>
											Image
										</TableCell>
										<TableCell align="center" style={{ fontSize: "15px" }}>
											Description
										</TableCell>
										<TableCell align="center" style={{ fontSize: "15px" }}>
											Label
										</TableCell>
										<TableCell align="center" style={{ fontSize: "15px" }}>
											Remove
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{cartItems.map((item, pos) => {
										const color =
											item === cartItems[0]
												? "#214EEA"
												: item === cartItems[1]
												? "red"
												: item === cartItems[2]
												? "#D221EA"
												: "yellow";
										const configItem = { ...item, color: color };
										return <Item {...configItem} />;
									})}
								</TableBody>
							</Table>
						</TableContainer>
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
				</Paper>
			</Grid>
			<Grid item xs={6}>
				<Paper style={{ background: "#196B91" }}>
					<RadarChart {...configRadarChart} />
				</Paper>
			</Grid>
		</Grid>
	);
};

export default CompareWatches;
