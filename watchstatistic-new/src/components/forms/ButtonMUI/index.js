import React from "react";
import { Button } from "@material-ui/core";
import { useFormikContext } from "formik";

const ButtonWrapper = ({ children, ...otherProps }) => {
	const { submitForm } = useFormikContext();

	const handleSubmit = () => {
		submitForm();
	};

	const configButton = {
		...otherProps,
		size: "small",
		variant: "contained",

		onClick: handleSubmit
	};

	return <Button {...configButton}>{children}</Button>;
};

export default ButtonWrapper;
