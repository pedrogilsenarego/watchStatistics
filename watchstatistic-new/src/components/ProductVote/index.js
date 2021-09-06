import React, { useState } from "react";
import { Slider, Typography } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

// eslint-disable-next-line
const ProductVote = ({}) => {
	const [value, setValue] = useState("Own");
	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<div>
			<FormControl component="fieldset">
				<FormLabel component="legend">Gender</FormLabel>
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
				defaultValue={50}
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
				defaultValue={50}
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
				defaultValue={50}
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
				defaultValue={50}
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
				defaultValue={50}
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
				defaultValue={50}
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
				defaultValue={50}
				aria-labelledby="discrete-slider"
				valueLabelDisplay="auto"
				step={1}
				marks
				min={0}
				max={10}
			/>
		</div>
	);
};
export default ProductVote;
