import React, { useState } from "react";
import { Slider, Typography } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "../forms/Button";
import { useDispatch } from "react-redux";
import { addProductStart } from "../../redux/Products/products.actions";

// eslint-disable-next-line
const ProductVote = ({}) => {
	const dispatch = useDispatch();
	const [value, setValue] = useState("Own");
	const handleChange = (event) => {
		setValue(event.target.value);
	};

	const handleApplyVote = (e) => {
		e.preventDefault();

		dispatch(
			addProductStart({
				numberVotes: 5
			})
		);
	};

	return (
		<div>
			<FormControl component="fieldset">
				<FormLabel component="legend"></FormLabel>
				<RadioGroup
					aria-label="gender"
					name="gender1"
					value={value}
					onChange={handleChange}
				>
					<FormControlLabel value="female" control={<Radio />} label="Own" />
					<FormControlLabel value="male" control={<Radio />} label="Not Own" />
				</RadioGroup>
			</FormControl>
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
		</div>
	);
};
export default ProductVote;
