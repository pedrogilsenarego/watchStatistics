import React, { useState } from "react";
import {
	Grid,
	Box,
	Typography,
	Button,
	Menu,
	MenuItem
} from "@material-ui/core";
import RadarChart from "../../RadarChart";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import ProductVote from "../ProductVote";
import Draggable from "react-draggable";
import CategoriesLegend from "../CategoriesLegend";

const mapState = (state) => ({
	currentUser: state.user.currentUser,
	product: state.productsData.product
});

const useStyles = makeStyles((theme) => ({
	menu: {
		"& .MuiPaper-root": {
			backgroundColor: "#04040680",
			color: "#ffffff",
			disableScrollLock: true,
			maxWidth: "350px"
		}
	},
	menu2: {
		"& .MuiPaper-root": {
			backgroundColor: "#04040680",
			color: "#ffffff",
			disableScrollLock: true,
			maxWidth: "200px"
		}
	},
	textBtn: {
		color: "#FFFFFF",
		fontSize: "13px",
		"&:hover": {
			color: "#FFA500"
		},
		"&:active": {
			color: "#FFFFFF"
		}
	}
}));

// eslint-disable-next-line
const ProductSidePanel = ({}) => {
	const { product } = useSelector(mapState);
	const [anchorVote, setAnchorVote] = useState(null);
	const [anchorLegendVote, setAnchorLegendVote] = useState(null);

	const handleCloseVote = () => {
		setAnchorVote(null);
	};
	const handleCloseLegendVote = () => {
		setAnchorLegendVote(null);
	};

	const classes = useStyles();

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
			<Grid item xs={12}>
				<Box
					bgcolor={"primary.dark"}
					color={"text.secondary"}
					borderRadius="10px"
					style={{
						padding: "10px",
						paddingRight: "5px"
					}}
				>
					<RadarChart {...configRadarChart} />
					<Box
						style={{
							marginTop: "10px"
						}}
					>
						<Typography
							fontWeight={600}
							align="center"
							style={{ width: "100%" }}
						>
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

						<Button
							className={classes.textBtn}
							style={{ width: "50%" }}
							aria-controls="vote"
							onClick={(e) => {
								setAnchorVote(e.currentTarget);
							}}
							disableRipple
						>
							Vote
						</Button>
						<Button
							className={classes.textBtn}
							style={{ width: "50%" }}
							aria-controls="legendVote"
							onClick={(e) => {
								setAnchorLegendVote(e.currentTarget);
							}}
							disableRipple
						>
							Categories
						</Button>
					</Box>
				</Box>
				<Draggable>
					<Menu
						disableScrollLock
						className={classes.menu}
						id="vote"
						onClose={handleCloseVote}
						anchorEl={anchorVote}
						open={Boolean(anchorVote)}
					>
						<MenuItem disableRipple>
							<ProductVote />
						</MenuItem>
					</Menu>
				</Draggable>
				<Draggable>
					<Menu
						disableScrollLock
						className={classes.menu2}
						id="legendVote"
						onClose={handleCloseLegendVote}
						anchorEl={anchorLegendVote}
						open={Boolean(anchorLegendVote)}
					>
						<CategoriesLegend />
					</Menu>
				</Draggable>
			</Grid>
		</Grid>
	);
};

export default ProductSidePanel;
