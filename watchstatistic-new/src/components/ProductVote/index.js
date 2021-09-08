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
	const { numberVotes } = product;

	const votationsArray = [
		quality,
		price,
		brand,
		refinement,
		history,
		engineering,
		xFactor
	];

	const handleApplyVote = (e) => {
		e.preventDefault();

		const configVote = {
			numberVotes: numberVotes + 1,
			productID: productID,
			votationsNonOwn: votationsArray
		};

		dispatch(updateProductVoteStart(configVote));
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
