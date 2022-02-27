import React, { useState, useMemo } from "react";
import {
	Grid,
	Box,
	Typography,
	Button,
	Menu,
	MenuItem,
	ButtonGroup
} from "@material-ui/core";
import RadarChart from "../../RadarChart";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import ProductVote from "../ProductVote";
import Draggable from "react-draggable";
import { RiDragDropLine } from "react-icons/ri";
import { useParams } from "react-router";
import { AiOutlineQuestionCircle } from "react-icons/ai";

import CategoriesLegend from "../CategoriesLegend";

const useStyles = makeStyles((theme) => ({
	menu: {
		"& .MuiPaper-root": {
			backgroundColor: "#04040699",
			color: "#ffffff",
			disableScrollLock: true,
			maxWidth: "350px"
		}
	},
	menu2: {
		transform: "translateX(-5%)",
		minWidth: "500px",
		"& .MuiPaper-root": {
			backgroundColor: "#04040699",
			color: "#ffffff",
			disableScrollLock: true,
			maxWidth: "200px"
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
	const { product, currentUser } = useSelector(mapState);
	const [anchorVote, setAnchorVote] = useState(null);
	const [anchorLegendVote, setAnchorLegendVote] = useState(null);
	const [targetVoteCategories, setTargetVoteCategories] = useState({
		...initialTargetVoteState
	});
	const [targetVote, setTargetVote] = useState(false);
	const [update, setUpdate] = useState(true);
	const { productID } = useParams();

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
				<Box
					color={"text.secondary"}
					borderRadius="10px"
					style={{
						padding: "10px",
						paddingRight: "5px"
					}}
				>
					{memoRadarChart}
					<Box
						style={{
							marginTop: "10px"
						}}
					>
						<Typography
							fontWeight={600}
							align="center"
							style={{ width: "100%", color: "#ffffff" }}
						>
							Score: {avgTotal}
						</Typography>

						<Typography
							align="center"
							style={{ width: "100%", color: "#ffffffBF" }}
						>
							Own/Experimented: {avgVotationsOwn} Votes: {numberVotesOwn}
						</Typography>
						<Typography
							align="center"
							style={{ width: "100%", color: "#ffffffBF" }}
						>
							Only Seen Digital: {avgVotationsNotOwn} Votes: {numberVotesNotOwn}
						</Typography>
					</Box>
				</Box>
				{currentUser && !currentUser.userVotes.includes(productID) && (
					<Button
						size="small"
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
				)}
				{currentUser && currentUser.userVotes.includes(productID) && (
					<Button
						className={classes.textBtn}
						style={{ width: "50%" }}
						disableRipple
					>
						Already Voted
					</Button>
				)}
				{!currentUser && (
					<Button
						className={classes.textBtn}
						style={{ width: "50%" }}
						aria-controls="vote"
						disableRipple
					>
						Login to Vote
					</Button>
				)}
				<Draggable handle="#imHandle">
					<Menu
						disableScrollLock
						className={classes.menu}
						id="vote"
						onClose={handleCloseVote}
						anchorEl={anchorVote}
						open={Boolean(anchorVote)}
					>
						<ButtonGroup
							style={{ paddingLeft: "5px", marginBottom: "5px" }}
							aria-label="outlined primary button group"
						>
							<Button id="imHandle">
								<RiDragDropLine fontSize="1.5em" />
							</Button>
						</ButtonGroup>
						<MenuItem disableRipple>
							<ProductVote {...configTargetVote} />
						</MenuItem>
					</Menu>
				</Draggable>

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
