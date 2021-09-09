import React from "react";

import { useSelector } from "react-redux";

import "./styles.scss";
import { Grid } from "@material-ui/core";

const mapState = (state) => ({
	currentUser: state.user.currentUser,
	product: state.productsData.product
});

// eslint-disable-next-line
const ProductCard = ({}) => {
	const { product } = useSelector(mapState);

	const { productThumbnail, productName, productDesc } = product;

	return (
		<div className="productCard">
			<Grid container>
				<div className="hero">
					<img src={productThumbnail} alt="" />
				</div>
			</Grid>
			<div className="productDetails">
				<ul>
					<li>
						<h1>{productName}</h1>
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
