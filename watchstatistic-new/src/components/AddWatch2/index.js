import React, { useState } from "react";
import "./styles.scss";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Grid from "@mui/material/Grid";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import { addProductStart } from "../../redux/Products/products.actions";

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

const AddWatch2 = () => {
	const dispatch = useDispatch();
	const { currentUser } = useSelector(mapState);
	const history = useHistory();
	const [preview, setPreview] = useState(true);
	const [additionalProductThumbnail2, setAdditionalProductThumbnail2] =
		useState(false);
	const [additionalProductThumbnail3, setAdditionalProductThumbnail3] =
		useState(false);
	const [additionalProductThumbnail4, setAdditionalProductThumbnail4] =
		useState(false);
	const [productThumbnailPreview, setProductThumbnailPreview] = useState([]);
	const [productBackGroundPreview, setProductBackgroundPreview] = useState("");
	const [productDescPreview, setProductDescPreview] = useState("");
	const [productAdditionalDataPreview, setProductAdditionalDataPreview] =
		useState("");

	const { userRoles, displayName } = currentUser;
	const admin = userRoles.includes("admin") ? true : false;

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
			votationsOwn: [0, 0, 0, 0, 0, 0, 0],
			userID: displayName
		};
		if (productionYears === "-") delete values.productionYears;

		dispatch(addProductStart(values));
		history.push("/");
	};

	const configSection3 = { preview };

	return (
		<div className="container">
			<Formik
				initialValues={{
					...INITIAL_FORM_STATE
				}}
				validationSchema={!preview ? FORM_VALIDATION : FORM_VALIDATION_NULL}
				onSubmit={(values) => {
					if (preview) handlePreview(values);
					else handleFormSubmit(values);
				}}
			>
				<Form>
					<Grid className="section" container justify="center">
						<Section1 />
					</Grid>

					<Grid className="section" container justify="center">
						<Section2 />
					</Grid>
					<Grid className="section" container justify="center">
						<Section3 {...configSection3} />
					</Grid>
				</Form>
			</Formik>
		</div>
	);
};

export default AddWatch2;
