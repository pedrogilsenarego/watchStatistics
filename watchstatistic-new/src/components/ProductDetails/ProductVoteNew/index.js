import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Grid } from "@material-ui/core";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import ButtonMUI from "../../forms/ButtonMUI";
import RadioButtonMUI from "../../forms/radioButtonMUI";
import Slider from "../../forms/SliderMUI";
import { updateProductVoteStart } from "../../../redux/Products/products.actions";
//import { makeStyles } from "@material-ui/core/styles";
//import { saveOrderHistory } from "../../../redux/Orders/orders.actions";

/* const useStyles = makeStyles((theme) => ({
	container: {}
})); */

const INITIAL_FORM_STATE = {
	ownership: "",
	quality: "",
	displayName: ""
};

const options = [
	{
		key: "option1",
		value: "Own",
		label: "I own the Watch",
		name: "Own"
	},
	{
		key: "option2",
		value: "Not Own",
		label: "I do not Own the Watch",
		name: "Not Own"
	}
];

const FORM_VALIDATION = Yup.object().shape({
	ownership: Yup.string().required("Required"),
	quality: Yup.boolean()
		.oneOf([true], "The terms and conditions must be accepted")
		.required("The terms and conditions must be accepted"),
	displayName: Yup.string().required("Required")
});

const mapState = (state) => ({
	currentUser: state.user.currentUser,
	product: state.productsData.product
});

// eslint-disable-next-line
const ProductVote = () => {
	//const classes = useStyles();

	const { product, currentUser } = useSelector(mapState);
	const dispatch = useDispatch();
	const [ownership, setOwnership] = useState("");
	const [quality, setQuality] = useState("");
	const [price, setPrice] = useState("");
	const [brand, setBrand] = useState("");
	const [refinement, setRefinement] = useState("");
	const [history, setHistory] = useState("");
	const [engineering, setEngineering] = useState("");
	const [xFactor, setXFactor] = useState("");
	const { productID } = useParams();

	const { id, userVotes, numberVotes } = currentUser;

	const {
		numberVotesOwn,
		numberVotesNotOwn,
		votationsOwn,
		votationsNonOwn,
		avgVotationsOwn,
		avgVotationsNotOwn
	} = product;

	const newVotationsOwnArray = [
		(
			(quality + votationsOwn[0] * numberVotesOwn) /
			(numberVotesOwn + 1)
		).toFixed(2),
		((price + votationsOwn[1] * numberVotesOwn) / (numberVotesOwn + 1)).toFixed(
			2
		),
		((brand + votationsOwn[2] * numberVotesOwn) / (numberVotesOwn + 1)).toFixed(
			2
		),
		(
			(refinement + votationsOwn[3] * numberVotesOwn) /
			(numberVotesOwn + 1)
		).toFixed(2),
		(
			(history + votationsOwn[4] * numberVotesOwn) /
			(numberVotesOwn + 1)
		).toFixed(2),
		(
			(engineering + votationsOwn[5] * numberVotesOwn) /
			(numberVotesOwn + 1)
		).toFixed(2),
		(
			(xFactor + votationsOwn[6] * numberVotesOwn) /
			(numberVotesOwn + 1)
		).toFixed(2)
	];

	const newVotationsNotOwnArray = [
		(
			(quality + votationsNonOwn[0] * numberVotesNotOwn) /
			(numberVotesNotOwn + 1)
		).toFixed(2),
		(
			(price + votationsNonOwn[1] * numberVotesNotOwn) /
			(numberVotesNotOwn + 1)
		).toFixed(2),
		(
			(brand + votationsNonOwn[2] * numberVotesNotOwn) /
			(numberVotesNotOwn + 1)
		).toFixed(2),
		(
			(refinement + votationsNonOwn[3] * numberVotesNotOwn) /
			(numberVotesNotOwn + 1)
		).toFixed(2),
		(
			(history + votationsNonOwn[4] * numberVotesNotOwn) /
			(numberVotesNotOwn + 1)
		).toFixed(2),
		(
			(engineering + votationsNonOwn[5] * numberVotesNotOwn) /
			(numberVotesNotOwn + 1)
		).toFixed(2),
		(
			(xFactor + votationsNonOwn[6] * numberVotesNotOwn) /
			(numberVotesNotOwn + 1)
		).toFixed(2)
	];

	const newVoteArray = [...userVotes, productID];

	const handleApplyVote = (e) => {
		e.preventDefault();

		if (ownership === "Own") {
			const newAvgTotal =
				numberVotesNotOwn > 0
					? ((+newAvgVotationsOwn + +avgVotationsNotOwn) / 2).toFixed(2)
					: (+newAvgVotationsOwn / 1).toFixed(2);

			const configVote = {
				numberVotesOwn: numberVotesOwn + 1,
				numberVotesNotOwn: numberVotesNotOwn,
				productID: productID,
				votationsNonOwn: votationsNonOwn,
				votationsOwn: newVotationsOwnArray,
				avgVotationsOwn: newAvgVotationsOwn,
				avgVotationsNotOwn: avgVotationsNotOwn,
				avgTotal: newAvgTotal,
				userID: id,
				numberVotes: numberVotes + 1,
				userVotes: newVoteArray
			};
			dispatch(updateProductVoteStart(configVote));
		}
		if (ownership === "Not Own") {
			const newAvgTotal =
				numberVotesNotOwn > 0
					? ((+newAvgVotationsOwn + +avgVotationsNotOwn) / 2).toFixed(2)
					: (+newAvgVotationsNotOwn / 1).toFixed(2);

			const configVote = {
				numberVotesOwn: numberVotesOwn,
				numberVotesNotOwn: numberVotesNotOwn + 1,
				productID: productID,
				votationsNonOwn: newVotationsNotOwnArray,
				votationsOwn: votationsOwn,
				avgVotationsOwn: avgVotationsOwn,
				avgVotationsNotOwn: newAvgVotationsNotOwn,
				avgTotal: newAvgTotal,
				userID: id,
				numberVotes: numberVotes + 1,
				userVotes: newVoteArray
			};
			dispatch(updateProductVoteStart(configVote));
		}
		//dispatch(saveOrderHistory(configOrder));
	};

	const newAvgVotationsOwn = (
		newVotationsOwnArray.reduce(function (prev, curr) {
			return (Number(prev) || 0) + (Number(curr) || 0);
		}) / 7
	).toFixed(2);

	const newAvgVotationsNotOwn = (
		newVotationsNotOwnArray.reduce(function (prev, curr) {
			return (Number(prev) || 0) + (Number(curr) || 0);
		}) / 7
	).toFixed(2);

	return (
		<Grid item xs={12}>
			<div>
				<Formik
					initialValues={{
						...INITIAL_FORM_STATE
					}}
					validationSchema={FORM_VALIDATION}
					onSubmit={(values) => {
						handleApplyVote(values);
					}}
				>
					<Form>
						<Grid item xs={12} style={{ paddingTop: "30px" }}>
							<RadioButtonMUI name="ownership" {...options} />
						</Grid>
						<Grid item xs={12} style={{ paddingTop: "30px" }}>
							<Slider name="quality" label="quality" />
						</Grid>

						<Grid item xs={12} style={{ paddingTop: "20px" }}>
							<ButtonMUI>Submit</ButtonMUI>
						</Grid>
					</Form>
				</Formik>
			</div>
		</Grid>
	);
};
export default ProductVote;
