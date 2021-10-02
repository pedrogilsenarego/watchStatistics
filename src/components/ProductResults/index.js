import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { fetchProductsStart } from "../../redux/Products/products.actions";
import Product from "./Product";
import FormSelect from "../forms/SelectMUI";
import LoadMore from "../LoadMore";
import { Grid } from "@material-ui/core";
import watchTypes from "./../../assets/data/watchTypes.json";
import watchBrands from "./../../assets/data/watchBrands.json";
import { makeStyles } from "@material-ui/core/styles";
import { RiMenuAddFill } from "react-icons/ri";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

const mapState = ({ productsData }) => ({
	products: productsData.products
});
// eslint-disable-next-line
const ProductResults = ({}) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const { filterType } = useParams();
	const [filter, setFilter] = useState("productCategory");
	const [state, setState] = React.useState({
		left: false
	});
	const pageSize = 8;

	const useStyles = makeStyles((theme) => ({
		main: {
			paddingTop: "10px"
		},
		drawer: {
			"& .MuiPaper-root": {
				backgroundColor: "#ffffff40",
				color: "#ffffffB3"
			}
		},
		filterButton: {
			height: "3.5rem",
			display: "flex",
			flexDirection: "column",
			justifyContent: "center"
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

	const { products } = useSelector(mapState);

	const { data, queryDoc, isLastPage } = products;

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = (anchor) => (
		<Box
			sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<Grid
				container
				direction="row"
				spacing={2}
				style={{ display: "flex", paddingTop: "160px" }}
			>
				<Grid
					container
					xs={12}
					spacing={1}
					md={3}
					style={{
						display: "flex",
						justifyContent: "flex-start",
						marginLeft: "10px"
					}}
				>
					<Grid item spacing={2}>
						<FormSelect className={classes.select} {...configFilters} />
					</Grid>
					<Grid item>
						<FormSelect className={classes.select} {...configFilterBrands} />
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);

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
		<div style={{ paddingTop: "50px" }}>
			<div>
				{["left"].map((anchor) => (
					<div key={anchor}>
						<Button
							className={classes.filterButton}
							style={{
								marginTop: "13px",
								marginLeft: "3px",
								position: "absolute",
								zIndex: "3",
								color: "white",
								backgroundColor: "#ffffff40"
							}}
							onClick={toggleDrawer(anchor, true)}
						>
							<RiMenuAddFill fontSize="1.5em" />
						</Button>

						<Drawer
							BackdropProps={{ invisible: true }}
							className={classes.drawer}
							anchor={anchor}
							open={state[anchor]}
							onClose={toggleDrawer(anchor, false)}
						>
							{list(anchor)}
						</Drawer>
					</div>
				))}
			</div>

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
