import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { signUpUserStart } from "./../../redux/User/user.actions";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/core";
import TextField from "./../../components/forms/InputMUI";

import { makeStyles } from "@material-ui/core/styles";
import ButtonMUI from "./../../components/forms/ButtonMUI";
import Container from "@mui/material/Container";

const useStyles = makeStyles((theme) => ({
	textField: {
		"& .MuiOutlinedInput-input": { color: "white" },
		"& . MuiInputLabel-root": {
			color: "#ffffffB3"
		},
		"& .MuiInputLabel-root": { color: "grey" },
		"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
			borderColor: "#ffffff",
			borderWidth: "2px"
		},
		"&:hover .MuiOutlinedInput-input": {
			color: "black"
		},
		"&:hover .MuiInputLabel-root": { color: "grey" },
		"&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
			borderColor: "#ffffffB3"
		},
		"&  .MuiOutlinedInput-input": {
			color: "black"
		},
		"& .MuiOutlinedInput-root.Mui-focused": {
			color: "#ffffffB3"
		},
		"& .MuiInputLabel-root.Mui-focused": { color: "#ffffffB3" },
		"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
			borderColor: "#ffffffB3"
		}
	}
}));
const mapState = ({ user }) => ({
	currentUser: user.currentUser
});

const INITIAL_FORM_STATE = {
	displayName: ""
};

const FORM_VALIDATION = Yup.object().shape({
	displayName: Yup.string().required("Required")
});

const AddProduct = (props) => {
	const dispatch = useDispatch();

	const classes = useStyles();
	const theme = useTheme();

	const { currentUser } = useSelector(mapState);

	const handleFormSubmit = (event) => {
		const { displayName, email, password, confirmPassword } = event;
		dispatch(
			signUpUserStart({
				displayName,
				email,
				password,
				confirmPassword
			})
		);
		return false;
	};

	return (
		<Grid item xs={12}>
			<div>
				<Formik
					initialValues={{
						...INITIAL_FORM_STATE
					}}
					validationSchema={FORM_VALIDATION}
					onSubmit={(values) => {
						handleFormSubmit(values);
					}}
				>
					<Form>
						<Grid container>
							<Grid item xs={12}>
								<Container
									style={{
										backgroundColor: theme.palette.textField.background,
										height: "40px",
										padding: "0px",
										marginTop: "10px",
										borderRadius: "4px"
									}}
								>
									<TextField
										className={classes.textField}
										name="displayName"
										size="small"
										placeholder="Name product"
									></TextField>
								</Container>
							</Grid>

							<Grid item xs={12} style={{ paddingTop: "15px" }}>
								<ButtonMUI>Submit</ButtonMUI>
							</Grid>
						</Grid>
					</Form>
				</Formik>
			</div>
		</Grid>
	);
};

export default AddProduct;
