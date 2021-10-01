import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
	root: {},
	formSelect: { color: "#ffffff" },
	select: { color: "#ffffff" },
	menuItem: { color: "#ffffff" }
});

const FormSelect = ({
	options,
	defaultValue,
	handleChange,
	label,
	props,
	...otherProps
}) => {
	const classes = useStyles();
	if (!Array.isArray(options) || options.length < 1) return null;

	return (
		<Box
			className={classes.root}
			sx={{ minWidth: 120, paddingTop: "5px", paddingBottom: "5px" }}
		>
			<FormControl className={classes.formSelect} fullWidth>
				<InputLabel id="demo-simple-select-label">{label}</InputLabel>

				<Select
					className={classes.select}
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={defaultValue}
					onChange={handleChange}
					{...otherProps}
				>
					{options.map((option, index) => {
						const { value, name } = option;

						return (
							<MenuItem className={classes.menuItem} key={index} value={value}>
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
