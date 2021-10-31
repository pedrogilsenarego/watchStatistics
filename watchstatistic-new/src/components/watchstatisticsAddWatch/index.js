import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addProductStart } from "../../redux/Products/products.actions";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router";
import { Grid, Typography, Box, Paper, Button } from "@material-ui/core";
import watchTypes from "./../../assets/data/watchTypes2.json";
import watchBrands from "./../../assets/data/watchBrands2.json";
import pricesBracket from "./../../assets/data/pricesBracket2.json";
import { AiOutlineQuestionCircle } from "react-icons/ai";

import TextField from "../forms/InputMUI";
import ButtonMUI from "../forms/ButtonMUI";
import Multiline from "../forms/MultiLineMUI";
import Select from "../forms/SelectMUIFormik";
import ProductDetailsPreview from "../../pages/ProductDetailsPreview";

const INITIAL_FORM_STATE = {
	productCategory: "",
	productBrand: "",
	productPriceBrackets: "",
	productName: "",
	productThumbnail: "",
	productThumbnail2: null,
	productThumbnail3: null,
	productThumbnail4: null,
	productBackground: "",
	productDesc: "",
	additionalDataTitle: "",
	additionalDataLink: "",
	yearProductionStart: "",
	yearProductionEnd: "",
	caseSize: "",
	movement: "",
	caseMaterial: "",
	waterResistance: "",
	reference: ""
};

const FORM_VALIDATION_NULL = Yup.object().shape({});

const FORM_VALIDATION = Yup.object().shape({
	productCategory: Yup.string().required("Required"),
	productBrand: Yup.string().required("Required"),
	caseMaterial: Yup.string(),
	waterResistance: Yup.string(),
	movement: Yup.string(),
	productPriceBrackets: Yup.string().required("Required"),
	productName: Yup.string().required("Required"),
	reference: Yup.string().required("Required"),
	caseSize: Yup.string(),
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
		.required("Please enter Image URL adress"),
	yearProductionStart: Yup.string().matches(/\b\d{4}\b/, {
		message: "Must be exactly 4 numbers",
		excludeEmptyString: true
	}),

	yearProductionEnd: Yup.string().matches(/\b\d{4}\b/, {
		message: "Must be exactly 4 numbers",
		excludeEmptyString: true
	})
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

	const [preview, setPreview] = useState(true);
	const [productThumbnailPreview, setProductThumbnailPreview] = useState([]);
	const [productBackGroundPreview, setProductBackgroundPreview] = useState("");
	const [productDescPreview, setProductDescPreview] = useState("");
	const [productAdditionalDataPreview, setProductAdditionalDataPreview] =
		useState("");

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
			productPriceBrackets,
			productDesc,
			additionalDataTitle,
			additionalDataLink,
			productCategory,
			caseSize,
			waterResistance,
			caseMaterial,
			yearProductionStart,
			yearProductionEnd,
			movement,
			reference
		} = e;

		const productionYears = yearProductionStart + "-" + yearProductionEnd;

		const thumbnail = additionalProductThumbnail4
			? [
					productThumbnail,
					productThumbnail2,
					productThumbnail3,
					productThumbnail4
			  ]
			: additionalProductThumbnail3
			? [productThumbnail, productThumbnail2, productThumbnail3]
			: additionalProductThumbnail2
			? [productThumbnail, productThumbnail2]
			: [productThumbnail];
		const values = {
			admin: admin,
			productCategory,
			productBrand,
			productPriceBrackets,
			caseSize: caseSize,
			productName,
			waterResistance,
			productBackground,
			productThumbnail: thumbnail,
			productDesc,
			caseMaterial,
			reference,
			movement,
			productionYears,
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
		};
		if (productionYears === "-") delete values.productionYears;

		dispatch(addProductStart(values));
		history.push("/watchstatistics");
	};

	const handlePreview = (e) => {
		const {
			productThumbnail,
			productThumbnail2,
			productThumbnail3,
			productThumbnail4,
			productBackground,
			productDesc,
			additionalDataTitle,
			additionalDataLink
		} = e;

		const thumbnail = additionalProductThumbnail4
			? [
					productThumbnail,
					productThumbnail2,
					productThumbnail3,
					productThumbnail4
			  ]
			: additionalProductThumbnail3
			? [productThumbnail, productThumbnail2, productThumbnail3]
			: additionalProductThumbnail2
			? [productThumbnail, productThumbnail2]
			: [productThumbnail];

		setProductThumbnailPreview(thumbnail);
		setProductBackgroundPreview(productBackground);
		setProductDescPreview(productDesc);
		setProductAdditionalDataPreview([
			{ title: additionalDataTitle, link: additionalDataLink }
		]);
	};

	const configPreview = {
		productThumbnail: productThumbnailPreview,
		productBackground: productBackGroundPreview,
		productDesc: productDescPreview,
		additionalData: productAdditionalDataPreview
	};

	return (
		<div>
			<Grid container justify="center">
				<Paper style={{ width: "90vw", background: "#196B91" }}>
					<Box style={{ margin: "10px" }}>
						<Formik
							initialValues={{
								...INITIAL_FORM_STATE
							}}
							validationSchema={
								!preview ? FORM_VALIDATION : FORM_VALIDATION_NULL
							}
							onSubmit={(values) => {
								if (preview) handlePreview(values);
								else handleFormSubmit(values);
							}}
						>
							<Form>
								<Typography variant="h6">Details from the Watch</Typography>
								<Grid container spacing={2} style={{ paddingTop: "20px" }}>
									<Grid item xs={12} md={6}>
										<Select
											name="productCategory"
											label="Categories*"
											options={watchTypes}
										/>
									</Grid>
									<Grid item xs={12} md={6}>
										<Select
											name="productBrand"
											label="Brands*"
											options={watchBrands}
										/>
									</Grid>
									<Grid item xs={12} md={6}>
										<Select
											name="productPriceBrackets"
											label="Price Brackets*"
											options={pricesBracket}
										/>
									</Grid>
									<Grid item xs={12} md={6}>
										<Select
											name="movement"
											label="Type of movement"
											options={{
												Automatic: "Automatic",
												Quartz: "Quartz",
												MechaQuartz: "MechaQuartz",
												Manual: "Manual"
											}}
										/>
									</Grid>
									<Grid item xs={12} md={6}>
										<Select
											name="caseMaterial"
											label="Watch material"
											options={{
												Gold: "Gold",
												"Stainless Steel": "Stainless Steel",
												Titanium: "Titanium",
												"White Gold": "White Gold"
											}}
										/>
									</Grid>
									<Grid item xs={12} md={6}>
										<Select
											name="waterResistance"
											label="Water Resistance"
											options={{
												"30meters": "30 meters",
												"50meters": "50 meters",
												"100meters": "100 meters"
											}}
										/>
									</Grid>
									<Grid item xs={3}>
										<TextField
											name="yearProductionStart"
											label="Start year"
										></TextField>
									</Grid>
									<Grid item xs={3}>
										<TextField
											name="yearProductionEnd"
											label="Finish year"
										></TextField>
									</Grid>
									<Grid item xs={3}>
										<TextField name="caseSize" label="Case size"></TextField>
									</Grid>

									<Grid item xs={6}>
										<TextField name="productName" label="Model*"></TextField>
									</Grid>
									<Grid item xs={6}>
										<TextField name="reference" label="Reference*"></TextField>
									</Grid>
									<Typography
										variant="h6"
										style={{ paddingLeft: "8px", paddingTop: "40px" }}
									>
										Images
									</Typography>
									<Grid item xs={12} style={{ paddingTop: "20px" }}>
										<TextField
											name="productThumbnail"
											label="Main Image*"
										></TextField>
										{additionalProductThumbnail2 && (
											<Grid item xs={12} style={{ paddingTop: "10px" }}>
												<TextField
													name="productThumbnail2"
													label="Additional Image"
												></TextField>
											</Grid>
										)}
										{additionalProductThumbnail3 && (
											<Grid item xs={12} style={{ paddingTop: "10px" }}>
												<TextField
													name="productThumbnail3"
													label="Additional Image 2"
												></TextField>
											</Grid>
										)}
										{additionalProductThumbnail4 && (
											<Grid item xs={12} style={{ paddingTop: "10px" }}>
												<TextField
													name="productThumbnail4"
													label="Additional Image 3"
												></TextField>
											</Grid>
										)}
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

									<Grid item xs={12}>
										<TextField
											name="productBackground"
											label="Background Image*"
										></TextField>
									</Grid>
									<Typography
										variant="h6"
										style={{ paddingLeft: "8px", paddingTop: "40px" }}
									>
										Description from the Watch
									</Typography>
									<Grid
										item
										xs={12}
										style={{
											paddingTop: "20px",
											display: "flex"
										}}
									>
										<Multiline
											style={{ width: "80%" }}
											name="productDesc"
											label="Description from Watch*"
										></Multiline>
										<Button size="small">
											<AiOutlineQuestionCircle fontSize="1.5em" />
										</Button>
									</Grid>
									<Grid item xs={12}>
										<Typography>References</Typography>
									</Grid>
									<Grid item xs={12}>
										<TextField
											name="additionalDataTitle"
											label="Title*"
										></TextField>
									</Grid>
									<Grid item xs={12}>
										<TextField
											name="additionalDataLink"
											label="Link*"
										></TextField>
									</Grid>
									<Grid item xs={12} style={{ paddingTop: "60px" }}>
										{preview && <ButtonMUI>Refresh Preview</ButtonMUI>}
										{!preview && <ButtonMUI>Submit</ButtonMUI>}
									</Grid>
									<Grid item xs={12} style={{ paddingTop: "20px" }}>
										{preview && (
											<Button onClick={() => setPreview(!preview)}>
												I am ready to Submit
											</Button>
										)}
										{!preview && (
											<Button onClick={() => setPreview(!preview)}>
												Take me back
											</Button>
										)}
									</Grid>
								</Grid>
							</Form>
						</Formik>
					</Box>
				</Paper>
			</Grid>
			<Typography
				style={{ paddingTop: "40px", paddingLeft: "60px" }}
				variant={"h5"}
			>
				Preview your watch
			</Typography>
			<ProductDetailsPreview {...configPreview} />
		</div>
	);
};

export default AddWatchForm;
