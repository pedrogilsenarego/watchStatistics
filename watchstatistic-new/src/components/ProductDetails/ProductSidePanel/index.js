import React, { useState } from "react";
import { Grid, Box, Container } from "@material-ui/core";
import RadarChart from "../../RadarChart";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import Button from "../../forms/Button";
import ProductVote from "../ProductVote";
import "./styles.scss";

const mapState = (state) => ({
	currentUser: state.user.currentUser,
	product: state.productsData.product
});

// eslint-disable-next-line
const ProductSidePanel = ({}) => {
	const { product, currentUser } = useSelector(mapState);
	const [voteMenu, setVoteMenu] = useState(false);
	const history = useHistory();

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
			labels: [
				"Quality",
				"Price",
				"Brand",
				"Refinement",
				"History",
				"Engineering",
				"X factor"
			],
			datasets: [
				{
					data: votationsOwn,
					label: "Own",
					borderColor: "#314e7d",
					backgroundColor: "#314e7d66",
					fill: true
				},
				{
					data: votationsNonOwn,
					label: "Not Own",
					borderColor: "#E5F517",
					fill: true,
					backgroundColor: "#E5F51766"
				}
			]
		},

		options: {
			scales: {
				r: {
					angleLines: {},
					suggestedMin: 0,
					suggestedMax: 10,
					ticks: {
						color: "#ffffff"
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

	const handleVoteBtn = (e) => {
		//e.preventDefault();
		setVoteMenu(!voteMenu);
	};

	return (
		<div>
			<Grid container>
				<Grid>
					<RadarChart {...configRadarChart} />
				</Grid>

				<Box
					bgcolor={"primary.dark"}
					textAlign="center"
					color={"text.secondary"}
				>
					<Container>
						<Grid container>
							<Grid item xs={12}>
								<Box fontWeight={600}>Total Score: {avgTotal}</Box>
								<Box>Votes From Owners: {numberVotesOwn}</Box>
								<Box>Score Owners: {avgVotationsOwn}</Box>
								<Box>Votes From Non Owners: {numberVotesNotOwn}</Box>
								<Box>Score Non Owners: {avgVotationsNotOwn}</Box>
							</Grid>
						</Grid>
					</Container>
				</Box>
				<Box>
					{currentUser && (
						<div>
							<Button onClick={() => handleVoteBtn()}>Vote Here</Button>
							<Box>{voteMenu && <ProductVote />}</Box>
						</div>
					)}
				</Box>
				<Box>
					{!currentUser && (
						<Button onClick={() => history.push("/login")}>
							Login Here To vote
						</Button>
					)}
				</Box>
			</Grid>
		</div>
	);
};

export default ProductSidePanel;
