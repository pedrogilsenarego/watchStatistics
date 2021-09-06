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
	product: state.productsData.product
});

// eslint-disable-next-line
const ProductCard = ({}) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const { productID } = useParams();
	const { product } = useSelector(mapState);

	const { productThumbnail, productName, productPrice, productDesc } = product;

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
					data: [8, 10, 9, 6, 9, 4, 10],
					label: "Own",
					borderColor: "#314e7d",
					backgroundColor: "#314e7d",
					fill: false
				},
				{
					data: [5, 8, 9, 5, 7, 3, 9],
					label: "Not Own",
					borderColor: "#989ea6",
					fill: false,
					backgroundColor: "#989ea6"
				}
			]
		},

		options: {
			title: {
				display: true,
				text: "Seiko SKX-007"
			},
			scale: {
				ticks: { beginAtZero: true }
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
							<span>${productPrice}</span>
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
