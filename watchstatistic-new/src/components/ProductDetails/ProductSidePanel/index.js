import React, { useState } from "react";
import { Grid, Box } from "@material-ui/core";
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
					suggestedMin: 0,
					suggestedMax: 10
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
		<div className="productCard">
			<Grid container>
				<Box>
					<Grid>
						<RadarChart {...configRadarChart} />
					</Grid>
					<div className="productDetails">
						<ul>
							<li>
								<span>Total Score: {avgTotal}</span>
							</li>
							<li>
								<span>Votes From Owners: {numberVotesOwn}</span>
							</li>
							<li>
								<span>Score Owners: {avgVotationsOwn}</span>
							</li>
							<li>
								<span>Votes From Non Owners: {numberVotesNotOwn}</span>
							</li>
							<li>
								<span>Score Non Owners: {avgVotationsNotOwn}</span>
							</li>
							<li>
								{currentUser && (
									<div>
										<Button onClick={() => handleVoteBtn()}>Vote Here</Button>
										<li>{voteMenu && <ProductVote {...product} />}</li>
									</div>
								)}
							</li>
							<li>
								{!currentUser && (
									<Button onClick={() => history.push("/login")}>
										Login Here To vote
									</Button>
								)}
							</li>
						</ul>
					</div>
				</Box>
			</Grid>
		</div>
	);
};

export default ProductSidePanel;
