import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addProductStart } from "../../redux/Products/products.actions";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Grid, Typography } from "@material-ui/core";
import watchTypes from "./../../assets/data/watchTypes2.json";
import watchBrands from "./../../assets/data/watchBrands2.json";

import TextField from "../forms/InputMUI";
import ButtonMUI from "../forms/ButtonMUI";
import Multiline from "../forms/MultiLineMUI";
import Select from "../forms/SelectMUIFormik";

const INITIAL_FORM_STATE = {
	productCategory: "",
	productBrand: "",
	productName: "",
	productThumbnail: "",
	productBackground: "",
	productDesc: "",
	additionalDataTitle: "",
	additionalDataLink: ""
};

const FORM_VALIDATION = Yup.object().shape({
	productCategory: Yup.string().required("Required"),
	productBrand: Yup.string().required("Required"),
	productName: Yup.string().required("Required"),
	productThumbnail: Yup.string()
		.matches(
			// eslint-disable-next-line
			/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,
			"Enter a valid URL!"
		)
		.required("Please enter Image URL adress"),
	productBackground: Yup.string()
		.matches(
			// eslint-disable-next-line
			/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,
			"Enter a valid URL!"
		)
		.required("Please enter Image URL adress"),
	productDesc: Yup.string().required("Required"),
	additionalDataTitle: Yup.string().required("Required"),
	additionalDataLink: Yup.string()
		.matches(
			// eslint-disable-next-line
			/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,
			"Enter a valid URL!"
		)
		.required("Please enter Image URL adress")
});

const mapState = (state) => ({
	currentUser: state.user.currentUser
});

const AddWatchForm = () => {
	const dispatch = useDispatch();
	const { currentUser } = useSelector(mapState);
	const { userRoles } = currentUser;
	const admin = userRoles.includes("admin") ? true : false;

	const handleFormSubmit = (e) => {
		const {
			productName,
			productThumbnail,
			productBackground,
			productBrand,
			productDesc,
			additionalDataTitle,
			additionalDataLink,
			productCategory
		} = e;

		dispatch(
			addProductStart({
				admin: admin,
				productCategory,
				productBrand,
				productName,
				productBackground,
				productThumbnail: [productThumbnail],
				productDesc,
				additionalData: [
					{ title: additionalDataTitle, link: additionalDataLink }
				],
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
				{userRoles.includes("admin") && <Typography>{userRoles}</Typography>}
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
									name="productCategory"
									label="Categories"
									options={watchTypes}
								/>
							</Grid>
							<Grid item xs={12}>
								<Select
									name="productBrand"
									label="Brands"
									options={watchBrands}
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
							<Grid item xs={12}>
								<Typography>References</Typography>
							</Grid>
							<Grid item xs={12}>
								<TextField name="additionalDataTitle" label="Title"></TextField>
							</Grid>
							<Grid item xs={12}>
								<TextField name="additionalDataLink" label="Link"></TextField>
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
