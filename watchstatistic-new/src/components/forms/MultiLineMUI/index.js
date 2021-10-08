import React from "react";
import { TextField } from "@material-ui/core";
import { useField } from "formik";

const MultilineFieldWrapper = ({ name, ...otherProps }) => {
	const [field, mata] = useField(name);

	const configTextField = {
		...field,
		...otherProps,
		fullWidth: true,

		variant: "standard"
	};

	if (mata && mata.touched && mata.error) {
		configTextField.error = true;
		configTextField.helperText = mata.error;
	}

	return <TextField multiline {...configTextField} />;
};

export default MultilineFieldWrapper;