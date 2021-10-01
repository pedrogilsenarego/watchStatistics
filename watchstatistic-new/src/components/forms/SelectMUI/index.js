import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
	root: {},
	formSelect: {
		"& .MuiOutlinedInput-input": { color: "white" },
		"& . MuiInputLabel-root": {
			color: "white"
		},
		"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
			borderColor: "white"
		},
		"&:hover .MuiOutlinedInput-input": {
			color: "#FFA500"
		},
		"&:hover .MuiInputLabel-root": { color: "#FFA500" },
		"&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
			borderColor: "#FFA500"
		},
		"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
			color: "#ffffffB3"
		},
		"& .MuiInputLabel-root.Mui-focused": { color: "#ffffffB3" },
		"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
			borderColor: "#ffffffB3"
		}
	},
	select: {},
	menuItem: {}
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
			<FormControl size="small" className={classes.formSelect} fullWidth>
				<InputLabel id="demo-simple-select-label">{label}</InputLabel>

				<Select
					style={{ backgroundColor: "#04040680" }}
					MenuProps={{
						sx: {
							"&& .Mui-selected": {
								color: "#FFA500"
							},
							color: "red",
							"& .MuiPaper-root": {
								backgroundColor: "#04040680",
								color: "#ffffff"
							}
						}
					}}
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
