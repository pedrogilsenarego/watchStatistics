import React, { useState } from "react";
import { Slider, Typography } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "../forms/Button";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { updateProductVoteStart } from "../../redux/Products/products.actions";

// eslint-disable-next-line
const ProductVote = (product) => {
	const dispatch = useDispatch();
	const [ownership, setOwnership] = useState("Own");
	const [quality, setQuality] = useState("");
	const [price, setPrice] = useState("");
	const [brand, setBrand] = useState("");
	const [refinement, setRefinement] = useState("");
	const [history, setHistory] = useState("");
	const [engineering, setEngineering] = useState("");
	const [xFactor, setXFactor] = useState("");
	const { productID } = useParams();
	const { numberVotesOwn, numberVotesNotOwn, votationsOwn, votationsNonOwn } =
		product;

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

	const handleApplyVote = (e) => {
		e.preventDefault();

		if (ownership === "Own") {
			const configVote = {
				numberVotesOwn: numberVotesOwn + 1,
				numberVotesNotOwn: numberVotesNotOwn,
				productID: productID,
				votationsNonOwn: votationsNonOwn,
				votationsOwn: newVotationsOwnArray
			};
			dispatch(updateProductVoteStart(configVote));
		}
		if (ownership === "Not Own") {
			const configVote = {
				numberVotesOwn: numberVotesOwn,
				numberVotesNotOwn: numberVotesNotOwn + 1,
				productID: productID,
				votationsNonOwn: newVotationsNotOwnArray,
				votationsOwn: votationsOwn
			};
			dispatch(updateProductVoteStart(configVote));
		}
	};

	return (
		<div>
			<FormControl component="fieldset">
				<FormLabel component="legend"></FormLabel>
				<RadioGroup
					aria-label="gender"
					name="gender1"
					value={ownership}
					onChange={(event) => {
						setOwnership(event.target.value);
					}}
				>
					<FormControlLabel value="Own" control={<Radio />} label="Own" />
					<FormControlLabel
						value="Not Own"
						control={<Radio />}
						label="Not Own"
					/>
				</RadioGroup>

				<Typography id="discrete-slider" gutterBottom>
					Quality
				</Typography>
				<Slider
					defaultValue={0}
					aria-labelledby="discrete-slider"
					valueLabelDisplay="auto"
					step={1}
					marks
					min={0}
					max={10}
					name="quality"
					onChange={(event, newValue) => {
						setQuality(newValue);
					}}
				/>
				<Typography id="discrete-slider" gutterBottom>
					Price
				</Typography>
				<Slider
					defaultValue={0}
					aria-labelledby="discrete-slider"
					valueLabelDisplay="auto"
					step={1}
					marks
					min={0}
					max={10}
					onChange={(event, newValue) => {
						setPrice(newValue);
					}}
				/>
				<Typography id="discrete-slider" gutterBottom>
					Brand
				</Typography>
				<Slider
					defaultValue={0}
					aria-labelledby="discrete-slider"
					valueLabelDisplay="auto"
					step={1}
					marks
					min={0}
					max={10}
					onChange={(event, newValue) => {
						setBrand(newValue);
					}}
				/>
				<Typography id="discrete-slider" gutterBottom>
					Refinement
				</Typography>
				<Slider
					defaultValue={0}
					aria-labelledby="discrete-slider"
					valueLabelDisplay="auto"
					step={1}
					marks
					min={0}
					max={10}
					onChange={(event, newValue) => {
						setRefinement(newValue);
					}}
				/>
				<Typography id="discrete-slider" gutterBottom>
					History
				</Typography>
				<Slider
					defaultValue={0}
					aria-labelledby="discrete-slider"
					valueLabelDisplay="auto"
					step={1}
					marks
					min={0}
					max={10}
					onChange={(event, newValue) => {
						setHistory(newValue);
					}}
				/>
				<Typography id="discrete-slider" gutterBottom>
					Engineering
				</Typography>
				<Slider
					defaultValue={0}
					aria-labelledby="discrete-slider"
					valueLabelDisplay="auto"
					step={1}
					marks
					min={0}
					max={10}
					onChange={(event, newValue) => {
						setEngineering(newValue);
					}}
				/>
				<Typography id="discrete-slider" gutterBottom>
					X-Factor
				</Typography>
				<Slider
					defaultValue={0}
					aria-labelledby="discrete-slider"
					valueLabelDisplay="auto"
					step={1}
					marks
					min={0}
					max={10}
					onChange={(event, newValue) => {
						setXFactor(newValue);
					}}
				/>
				<Button onClick={handleApplyVote}>Apply Vote</Button>
			</FormControl>
		</div>
	);
};
export default ProductVote;
