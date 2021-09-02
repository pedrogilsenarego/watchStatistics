import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Button from "../forms/Button";
import { addProduct } from "./../../redux/Cart/cart.actions";
import {
	fetchProductStart,
	setProduct
} from "../../redux/Products/products.actions";
import "./styles.scss";

const mapState = (state) => ({
	product: state.productsData.product
});

// eslint-disable-next-line
const ProductCard = ({}) => {
	const dispatch = useDispatch();
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
	};

	const configAddToCartBtn = {
		type: "button"
	};

	return (
		<div className="productCard">
			<div className="hero">
				<img src={productThumbnail} alt="" />
			</div>
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
	);
};
export default ProductCard;
