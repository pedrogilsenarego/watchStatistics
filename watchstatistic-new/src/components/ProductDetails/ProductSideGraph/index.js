import React from "react";
import { Grid, Box, Typography } from "@material-ui/core";
import RadarChart from "../../RadarChart";
import { useSelector } from "react-redux";
//import { makeStyles } from "@material-ui/core/styles";
import ProductSidePanelMenu from "./SideMenu";

const mapState = (state) => ({
	currentUser: state.user.currentUser,
	product: state.productsData.product
});

/* const useStyles = makeStyles((theme) => ({
	legend: {
		fontSize: 20,
		fontFamily: "MyFont"
	}
})); */

// eslint-disable-next-line
const ProductSidePanel = ({}) => {
	const { product } = useSelector(mapState);

	//const classes = useStyles();

	const {
		avgVotationsOwn,
		avgVotationsNotOwn,
		votationsOwn,
		votationsNonOwn,
		numberVotesOwn,
		numberVotesNotOwn,
		avgTotal
	} = product;

	const configRadarChart = {
		data: {
			//"Quality", "Price", "Brand", "Refinement", "History", "Engineering", "X-Factor"
			labels: ["S", "M", "L", "K", "R", "Q", "O"],
			datasets: [
				{
					data: votationsNonOwn,
					label: "Not Own",
					borderColor: "#E5F517",
					fill: true,
					backgroundColor: "#E5F51766"
				},
				{
					data: votationsOwn,
					label: "Own",

					borderColor: "#42e6f5",
					backgroundColor: "#42e6f566",
					fill: true
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
								return "Quality";
							}
							if (item[0].label === "M") {
								return "Price";
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
						},
						label: function (item, everything) {
							console.log(item);
							return item.raw;
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
		<Grid container>
			<Grid item xs={10} md={10}>
				<Box
					bgcolor={"primary.dark"}
					color={"text.secondary"}
					borderRadius="10px"
					style={{
						marginRight: "5px",
						padding: "10px",
						paddingRight: "10px"
					}}
				>
					<RadarChart {...configRadarChart} />

					<Typography align="center" style={{ width: "100%" }} fontWeight={600}>
						Total Score: {avgTotal}
					</Typography>
					<Typography align="center" style={{ width: "100%" }}>
						Votes From Owners: {numberVotesOwn}
					</Typography>
					<Typography align="center" style={{ width: "100%" }}>
						Score Owners: {avgVotationsOwn}
					</Typography>
					<Typography align="center" style={{ width: "100%" }}>
						Votes From Non Owners: {numberVotesNotOwn}
					</Typography>
					<Typography align="center" style={{ width: "100%" }}>
						Score Non Owners: {avgVotationsNotOwn}
					</Typography>
				</Box>
			</Grid>
			<Grid item xs={2} md={2}>
				<ProductSidePanelMenu />
			</Grid>
		</Grid>
	);
};

export default ProductSidePanel;

/* <Typography className={classes.legend}>Q engineering</Typography>
				<Typography className={classes.legend}>S quality</Typography>
				<Typography className={classes.legend}>M price</Typography>
				<Typography className={classes.legend}>L brand</Typography>
				<Typography className={classes.legend}>K refinement</Typography>
				<Typography className={classes.legend}>R history</Typography>
				<Typography className={classes.legend}>O x-factor</Typography> */
