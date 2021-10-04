import React from "react";
import { useDispatch } from "react-redux";
import { addProductStart } from "../../redux/Products/products.actions";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Grid } from "@material-ui/core";
import watchTypes from "./../../assets/data/watchTypes2.json";
import watchBrands from "./../../assets/data/watchBrands.json";

import TextField from "../forms/InputMUI";
import ButtonMUI from "../forms/ButtonMUI";
import Multiline from "../forms/MultiLineMUI";
import Select from "../forms/SelectMUIFormik";

const INITIAL_FORM_STATE = {
	categories: "",
	productName: "",
	productThumbnail: "",
	productBackground: "",
	productDesc: ""
};

const FORM_VALIDATION = Yup.object().shape({
	categories: Yup.string().required("Required"),
	productName: Yup.string().required("Required"),
	productThumbnail: Yup.string()
		.matches(
			/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
			"Enter a valid URL!"
		)
		.required("Please enter Image URL adress"),
	productBackground: Yup.string()
		.matches(
			/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
			"Enter a valid URL!"
		)
		.required("Please enter Image URL adress"),
	productDesc: Yup.string().required("Required")
});

const AddWatchForm = () => {
	const dispatch = useDispatch();

	const handleFormSubmit = (e) => {
		const {
			productName,
			productThumbnail,
			productBackground,
			productDesc,
			productCategory
		} = e;

		dispatch(
			addProductStart({
				productCategory,
				productBrand: "rolex",
				productName,
				productBackground,
				productThumbnail: [productThumbnail],
				productDesc,
				avgTotal: 0,
				numberVotesNotOwn: 0,
				numberVotesOwn: 0,
				avgVotationsOwn: 0,
				avgVotationsNotOwn: 0,
				votationsNonOwn: [0, 0, 0, 0, 0, 0, 0],
				votationsOwn: [0, 0, 0, 0, 0, 0, 0]
			})
		);
	};

	return (
		<Grid item xs={12}>
			<div>
				<Formik
					initialValues={{
						...INITIAL_FORM_STATE
					}}
					validationSchema={FORM_VALIDATION}
					onSubmit={(values) => {
						handleFormSubmit(values);
					}}
				>
					<Form>
						<Grid container>
							<Grid item xs={12}>
								<Select
									name="categories"
									label="Categories"
									options={watchTypes}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField name="productName" label="Model"></TextField>
							</Grid>
							<Grid item xs={12}>
								<TextField name="productThumbnail" label="Images"></TextField>
							</Grid>
							<Grid item xs={12}>
								<TextField
									name="productBackground"
									label="Background Image"
								></TextField>
							</Grid>
							<Grid item xs={12}>
								<Multiline
									name="productDesc"
									label="Description from Watch"
								></Multiline>
							</Grid>

							<Grid item xs={12} style={{ paddingTop: "20px" }}>
								<ButtonMUI>Submit</ButtonMUI>
							</Grid>
						</Grid>
					</Form>
				</Formik>
			</div>
		</Grid>
	);
};

export default AddWatchForm;
