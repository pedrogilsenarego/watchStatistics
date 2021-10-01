import React from "react";
import {
	FormControl,
	Select,
	MenuItem,
	InputLabel,
	Box
} from "@material-ui/core";

const FormSelect = ({
	options,
	defaultValue,
	handleChange,
	label,
	...otherProps
}) => {
	if (!Array.isArray(options) || options.length < 1) return null;

	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">{label}</InputLabel>

				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={defaultValue}
					onChange={handleChange}
					{...otherProps}
				>
					{options.map((option, index) => {
						const { value, name } = option;

						return (
							<MenuItem key={index} value={value}>
								{name}
							</MenuItem>
						);
					})}
				</Select>
			</FormControl>
		</Box>
	);
};

export default FormSelect;
