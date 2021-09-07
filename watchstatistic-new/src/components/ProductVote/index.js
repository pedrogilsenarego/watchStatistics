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
	const [value, setValue] = useState("Own");
	const [quality, setQuality] = useState();
	const { productID } = useParams();
	const { numberVotes } = product;

	const votationsArray = [3, 3, 3, 3, 3, 3, 3];

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
					value={value}
					onChange={(event) => {
						setValue(event.target.value);
					}}
				>
					<FormControlLabel value="female" control={<Radio />} label="Own" />
					<FormControlLabel value="male" control={<Radio />} label="Not Own" />
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
					value={quality}
					onChange={(e) => {
						setQuality(e.target.value);
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
				/>
				<Button onClick={handleApplyVote}>Apply Vote</Button>
			</FormControl>
		</div>
	);
};
export default ProductVote;
