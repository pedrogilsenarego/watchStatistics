import React, { useState, useMemo } from "react";
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
import { useParams } from "react-router";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { useMediaQuery, useTheme } from "@material-ui/core";
import CategoriesLegend from "../CategoriesLegend";

const initialTargetVoteState = {
	quality: "",
	price: "",
	brand: "",
	refinement: "",
	history: "",
	engineering: "",
	xFactor: ""
};

// eslint-disable-next-line
const ProductSidePanel = ({}) => {
	const mapState = (state) => ({
		currentUser: state.user.currentUser,
		product: state.productsData.product
	});

	const theme = useTheme();

	const { product, currentUser } = useSelector(mapState);
	const [anchorVote, setAnchorVote] = useState(null);
	const [anchorLegendVote, setAnchorLegendVote] = useState(null);
	const [targetVoteCategories, setTargetVoteCategories] = useState({
		...initialTargetVoteState
	});
	const [targetVote, setTargetVote] = useState(false);
	const [update, setUpdate] = useState(true);
	const { productID } = useParams();
	const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

	const useStyles = makeStyles((theme) => ({
		menu: {
			transform: isMatch ? "translateX(-10%)" : "translateX(-35%)",
			"& .MuiPaper-root": {
				backgroundColor: "#ffffff66",
				color: "#ffffff",
				disableScrollLock: true,
				maxWidth: "350px"
			}
		},
		menu2: {
			transform: "translateX(-5%)",
			"& .MuiPaper-root": {
				backgroundColor: "#ffffff66",
				color: "#ffffff",
				disableScrollLock: true,
				minWidth: "400px"
			}
		},
		textBtn: {
			color: "#FFFFFF",
			border: "solid 2px",
			borderColor: "#ffffff66",
			fontSize: "13px",
			borderRadius: "20px",
			"&:hover": {
				color: "#FFA500"
			},
			"&:active": {
				color: "#FFFFFF"
			}
		}
	}));

	const handleCloseVote = () => {
		setAnchorVote(null);
		setTargetVote(false);
		setTargetVoteCategories({ ...initialTargetVoteState });
	};
	const handleCloseLegendVote = () => {
		setAnchorLegendVote(null);
	};

	const handleTargetVote = (value, name) => {
		setTargetVoteCategories({ ...targetVoteCategories, [name]: value });
	};

	const handleVisualTargetVote = (value) => {
		setTargetVote(value);
	};

	const handleUpdate = () => {
		setUpdate(!update);
	};

	const configTargetVote = {
		handleTargetVote,
		setTargetVote,
		handleVisualTargetVote,
		targetVote,
		handleCloseVote,
		handleUpdate
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

	const targetVoteData = [
		targetVoteCategories.quality,
		targetVoteCategories.price,
		targetVoteCategories.brand,
		targetVoteCategories.refinement,
		targetVoteCategories.history,
		targetVoteCategories.engineering,
		targetVoteCategories.xFactor
	];

	const dataSetTargetVote = () => {
		if (targetVote)
			return {
				data: targetVoteData,
				label: "Target Vote",

				borderColor: "#F9350B",
				backgroundColor: "#F9350B66",
				fill: true
			};
		return { label: "" };
	};

	const configRadarChart = {
		data: {
			//"Quality", "Price", "Brand", "Refinement", "History", "Engineering", "X-Factor"
			labels: ["S", "M", "L", "K", "R", "Q", "O"],
			datasets: [
				{
					data: votationsOwn,
					label: "Own/Experimented",

					borderColor: "#42e6f5",
					backgroundColor: "#42e6f566",
					fill: true
				},

				{
					data: votationsNonOwn,
					label: "Only seen Digitaly",
					borderColor: "#E5F517",
					fill: true,
					backgroundColor: "#E5F51766"
				},
				dataSetTargetVote()
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

	if (!targetVote) configRadarChart.data.datasets.pop();

	const memoRadarChart = useMemo(
		() => <RadarChart {...configRadarChart} />,
		// eslint-disable-next-line
		[update]
	);

	return (
		
		<Grid container>
			<Grid item style={{ textAlign: "center" }} xs={12}>
				<AiOutlineQuestionCircle
					style={{
						cursor: "pointer",
						poistion: "absolute",
						float: "right",
						color: "#ffffffCC"
					}}
					size="2em"
					aria-controls="legendVote"
					onClick={(e) => {
						setAnchorLegendVote(e.currentTarget);
					}}
				/>
				{memoRadarChart}
				
				<Grid container style={{marginTop: "10px"}}>
					<Grid item xs={6} >
				<Box	
							
					style={{textAlign: "left", padding: "10px"}}
				>				
						<Typography
							fontWeight={600}
							
							style={{ color: "#ffffff" }}
						>
							Score: {avgTotal}
						</Typography>

						<Typography
							
							style={{  color: "#ffffffBF", fontSize: "13px" }}
						>
							Own/Experimented: {avgVotationsOwn} Votes: {numberVotesOwn}
						</Typography>
						<Typography
							
							style={{  color: "#ffffffBF", fontSize: "13px" }}
						>
							Only Seen Digital: {avgVotationsNotOwn} Votes: {numberVotesNotOwn}
						</Typography>
					</Box>
				</Grid><Grid item xs={6} alignItems="center" justifyContent="center" container>
				{currentUser && !currentUser.userVotes.includes(productID) && (
					<Button
						
						className={classes.textBtn}
						style={{ width: "80%" }}
						aria-controls="vote"
						onClick={(e) => {
							setAnchorVote(e.currentTarget);
						}}
						disableRipple
					>
						Vote
					</Button>
				)}
				{currentUser && currentUser.userVotes.includes(productID) && (
					<Button
						className={classes.textBtn}
						style={{ width: "80%" }}
						disableRipple
					>
						Already Voted
					</Button>
				)}
				{!currentUser && (
					<Button
						className={classes.textBtn}
						style={{ width: "80%" }}
						aria-controls="vote"
						disableRipple
					>
						Login to Vote
					</Button>
				)}</Grid>
				</Grid>

				<Menu
					disableScrollLock
					className={classes.menu}
					id="vote"
					onClose={handleCloseVote}
					anchorEl={anchorVote}
					open={Boolean(anchorVote)}
				>
					<MenuItem disableRipple>
						<ProductVote {...configTargetVote} />
					</MenuItem>
				</Menu>

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
			</Grid>
		</Grid>
	);
};

export default ProductSidePanel;
