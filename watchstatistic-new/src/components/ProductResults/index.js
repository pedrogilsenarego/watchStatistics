import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { fetchProductsStart } from "../../redux/Products/products.actions";
import Product from "./Product";
import FormSelect from "../forms/FormSelect";
import LoadMore from "../LoadMore";
import { Box, Grid } from "@material-ui/core";
import watchTypes from "./../../assets/data/watchTypes.json";

const mapState = ({ productsData }) => ({
	products: productsData.products
});
// eslint-disable-next-line
const ProductResults = ({}) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const { filterType } = useParams();
	const { products } = useSelector(mapState);

	const { data, queryDoc, isLastPage } = products;

	useEffect(
		() => {
			dispatch(fetchProductsStart({ filterType }));
		},
		// eslint-disable-next-line
		[filterType]
	);

	const handleFilter = (e) => {
		const nextFilter = e.target.value;
		history.push(`/search/${nextFilter}`);
	};

	if (!Array.isArray(data)) return null;

	if (data.length < 1) {
		return (
			<div>
				<p>No search Results</p>
			</div>
		);
	}

	const configFilters = {
		defaultValue: filterType,
		options: watchTypes.options,
		handleChange: handleFilter
	};

	const handleLoadMore = () => {
		dispatch(
			fetchProductsStart({
				filterType,
				startAfterDoc: queryDoc,
				persistProducts: data
			})
		);
	};

	const configLoadMore = {
		onLoadMoreEvt: handleLoadMore
	};

	return (
		<div>
			<Box height={"80px"} bgcolor="black"></Box>
			<Box bgcolor="black" padding={"10px"}>
				<FormSelect {...configFilters} />

				<Grid container spacing={1}>
					{data.map((product, pos) => {
						const { productThumbnail, productName } = product;
						if (!productThumbnail || !productName) return null;

						const configProduct = {
							...product
						};
						return (
							<Grid item xs="12" sm="6" md="3">
								<Product {...configProduct} />
							</Grid>
						);
					})}
				</Grid>

				{!isLastPage && <LoadMore {...configLoadMore} />}
			</Box>
		</div>
	);
};

export default ProductResults;
