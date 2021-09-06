import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Button from "../forms/Button";
import { addProduct } from "./../../redux/Cart/cart.actions";
import {
	fetchProductStart,
	setProduct
} from "../../redux/Products/products.actions";
import "./styles.scss";
import { Grid } from "@material-ui/core";
import RadarChart from "./../RadarChart";

const mapState = (state) => ({
	currentUser: state.user.currentUser,
	product: state.productsData.product
});

// eslint-disable-next-line
const ProductCard = ({}) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const { productID } = useParams();
	const { product, currentUser } = useSelector(mapState);

	const {
		productThumbnail,
		productName,
		averageVotations,
		productDesc,
		votationsOwn,
		votationsNonOwn,
		numberVotes
	} = product;

	useEffect(
		() => {
			dispatch(fetchProductStart(productID));
			return () => {
				dispatch(setProduct({}));
			};
		},
		// eslint-disable-next-line
		[]
	);

	const handleAddToCart = (product) => {
		if (!product) return;
		dispatch(addProduct(product));
		history.push("/cart");
	};

	const configAddToCartBtn = {
		type: "button"
	};
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

	return (
		<Grid container>
			<div className="productCard">
				<Grid container>
					<Grid>
						<div className="hero">
							<img src={productThumbnail} alt="" />
						</div>
					</Grid>
					<Grid>
						<RadarChart {...configRadarChart} />
					</Grid>
				</Grid>
				<div className="productDetails">
					<ul>
						<li>
							<h1>{productName}</h1>
						</li>
						<li>
							<span>{averageVotations}</span>
						</li>
						<li>
							<span>{numberVotes}</span>
						</li>
						<li>
							<div className="addToCart">
								<Button
									{...configAddToCartBtn}
									onClick={() => handleAddToCart(product)}
								>
									Add to Cart
								</Button>
							</div>
						</li>
						<li>{currentUser && <Button>Vote Here</Button>}</li>
						<li>
							{!currentUser && (
								<Button onClick={() => history.push("/login")}>
									Login Here To vote
								</Button>
							)}
						</li>
						<li>
							<span
								className="desc"
								dangerouslySetInnerHTML={{ __html: productDesc }}
							/>
						</li>
					</ul>
				</div>
			</div>
		</Grid>
	);
};
export default ProductCard;
