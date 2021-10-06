import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addProductStart } from "../../redux/Products/products.actions";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router";
import { Grid, Typography, Box, Button } from "@material-ui/core";
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
	productThumbnail2: null,
	productThumbnail3: null,
	productThumbnail4: null,
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
	const history = useHistory();
	const dispatch = useDispatch();
	const [additionalProductThumbnail2, setAdditionalProductThumbnail2] =
		useState(false);
	const [additionalProductThumbnail3, setAdditionalProductThumbnail3] =
		useState(false);
	const [additionalProductThumbnail4, setAdditionalProductThumbnail4] =
		useState(false);
	const { currentUser } = useSelector(mapState);
	const { userRoles } = currentUser;
	const admin = userRoles.includes("admin") ? true : false;

	const handleFormSubmit = (e) => {
		const {
			productName,
			productThumbnail,
			productThumbnail2,
			productThumbnail3,
			productThumbnail4,
			productBackground,
			productBrand,
			productDesc,
			additionalDataTitle,
			additionalDataLink,
			productCategory
		} = e;

		const thumbnail = additionalProductThumbnail2
			? [productThumbnail, productThumbnail2]
			: additionalProductThumbnail3
			? [productThumbnail, productThumbnail2, productThumbnail3]
			: additionalProductThumbnail4
			? [
					productThumbnail,
					productThumbnail2,
					productThumbnail3,
					productThumbnail4
			  ]
			: [productThumbnail];

		dispatch(
			addProductStart({
				admin: admin,
				productCategory,
				productBrand,
				productName,
				productBackground,
				productThumbnail: thumbnail,
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
		history.push("/watchstatistics");
	};

	return (
		<Grid container justify="center">
			<Box style={{ width: "60vw" }}>
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
						<Grid container spacing={2}>
							<Grid item xs={12} md={6}>
								<Select
									name="productCategory"
									label="Categories"
									options={watchTypes}
								/>
							</Grid>
							<Grid item xs={12} md={6}>
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
								<TextField
									name="productThumbnail"
									label="Main Image"
								></TextField>
								{!additionalProductThumbnail4 && (
									<Button
										onClick={() => {
											if (!additionalProductThumbnail2)
												setAdditionalProductThumbnail2(true);
											if (additionalProductThumbnail2)
												setAdditionalProductThumbnail3(true);
											if (additionalProductThumbnail3)
												setAdditionalProductThumbnail4(true);
										}}
									>
										Additional Image
									</Button>
								)}
							</Grid>
							{additionalProductThumbnail2 && (
								<Grid item xs={12}>
									<TextField
										name="productThumbnail2"
										label="Additional Image"
									></TextField>
								</Grid>
							)}
							{additionalProductThumbnail3 && (
								<Grid item xs={12}>
									<TextField
										name="productThumbnail3"
										label="Additional Image 2"
									></TextField>
								</Grid>
							)}
							{additionalProductThumbnail4 && (
								<Grid item xs={12}>
									<TextField
										name="productThumbnail4"
										label="Additional Image 3"
									></TextField>
								</Grid>
							)}
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
			</Box>
		</Grid>
	);
};

export default AddWatchForm;
