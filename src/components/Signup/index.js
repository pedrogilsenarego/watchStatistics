import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { signUpUserStart } from "./../../redux/User/user.actions";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Grid, Button } from "@material-ui/core";

import TextField from "../forms/InputMUI";
import CheckBox from "../forms/checkBoxMUI";
import ButtonMUI from "../forms/ButtonMUI";

const mapState = ({ user }) => ({
	currentUser: user.currentUser
});

const INITIAL_FORM_STATE = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
	termsOfService: false
};

const FORM_VALIDATION = Yup.object().shape({
	displayName: Yup.string().required("Required"),
	email: Yup.string().email("Invalid email").required("Required"),
	password: Yup.string()
		.required("Required")
		.matches(
			/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
			"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
		),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref("password"), ""], "Passwords must Match")
		.required("Required")
		.matches(
			/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
			"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
		),
	termsOfService: Yup.boolean()
		.oneOf([true], "The terms and conditions must be accepted")
		.required("The terms and conditions must be accepted")
});

const Signup = (props) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const { currentUser } = useSelector(mapState);

	useEffect(
		() => {
			if (currentUser) {
				history.goBack();
			}
		},
		// eslint-disable-next-line
		[currentUser]
	);

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
								<TextField name="displayName" label="full name"></TextField>
							</Grid>
							<Grid item xs={12}>
								<TextField name="email" label="email"></TextField>
							</Grid>
							<Grid item xs={12}>
								<TextField type="password" name="password" label="Password" />
							</Grid>
							<Grid item xs={12}>
								<TextField
									type="password"
									name="confirmPassword"
									label="ConfirmPassword"
								/>
							</Grid>
							<Grid item xs={12} style={{ paddingTop: "30px" }}>
								<CheckBox
									name="termsOfService"
									legend="Terms of Service"
									label="I, agree"
								/>
							</Grid>
							<Grid item xs={12} style={{ paddingTop: "20px" }}>
								<ButtonMUI>Submit</ButtonMUI>
							</Grid>
						</Grid>
					</Form>
				</Formik>
			</div>

			<div className="links">
				<Button href="/recovery">Reset Password</Button>
			</div>
		</Grid>
	);
};

export default Signup;
