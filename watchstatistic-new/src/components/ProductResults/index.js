import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { fetchProductsStart } from "../../redux/Products/products.actions";
import Product from "./Product";
import FormSelect from "../forms/SelectMUI";
import LoadMore from "../LoadMore";
import { Box, Grid } from "@material-ui/core";
import watchTypes from "./../../assets/data/watchTypes.json";
import watchBrands from "./../../assets/data/watchBrands.json";
import { makeStyles } from "@material-ui/core/styles";

const mapState = ({ productsData }) => ({
	products: productsData.products
});
// eslint-disable-next-line
const ProductResults = ({}) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const { filterType } = useParams();
	const [filter, setFilter] = useState("productCategory");
	const pageSize = 8;

	const { products } = useSelector(mapState);

	const { data, queryDoc, isLastPage } = products;

	const useStyles = makeStyles((theme) => ({
		main: {
			paddingTop: "10px"
		},
		filters: {
			backgroundColor: "#196B91",
			color: "#ffffff",
			padding: "2px"
		},
		select: {
			backgroundColor: "#134F6B"
		}
	}));
	const classes = useStyles();

	useEffect(
		() => {
			dispatch(fetchProductsStart({ filterType, filter, pageSize }));
		},
		// eslint-disable-next-line
		[filterType]
	);

	const handleFilter = (e) => {
		const nextFilter = e.target.value;
		setFilter("productCategory");
		history.push(`/search/${nextFilter}`);
	};

	const handleFilterBrand = (e) => {
		const nextFilter = e.target.value;
		setFilter("productBrand");
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
		handleChange: handleFilter,
		label: "Categories"
	};

	const configFilterBrands = {
		defaultValue: filterType,
		options: watchBrands.options,
		handleChange: handleFilterBrand,
		label: "Brands"
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
		<div style={{ paddingTop: "62px" }}>
			<Box container className={classes.filters}>
				<Grid container spacing={2}>
					<Grid item xs={12} md={3}>
						<FormSelect className={classes.select} {...configFilters} />
					</Grid>
					<Grid item xs={12} md={3}>
						<FormSelect className={classes.select} {...configFilterBrands} />
					</Grid>
				</Grid>
			</Box>

			<Grid container spacing={1} className={classes.main}>
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
		</div>
	);
};

export default ProductResults;
