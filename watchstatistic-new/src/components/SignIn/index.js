import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
	emailSignInStart,
	googleSignInStart
} from "../../redux/User/user.actions";

import * as Yup from "yup";
import { Grid, Button } from "@material-ui/core";
import { Form, Formik } from "formik";
import TextField from "../forms/InputMUI";
import ButtonMUI from "../forms/ButtonMUI";

const INITIAL_FORM_STATE = {
	email: "",
	password: ""
};

const FORM_VALIDATION = Yup.object().shape({
	email: Yup.string().required("Required"),
	password: Yup.string().required("Required")
});

const SignIn = (props) => {
	const dispatch = useDispatch();

	const handleFormSubmit = (event) => {
		const { email, password } = event;
		dispatch(
			emailSignInStart({
				email,
				password
			})
		);
		return false;
	};

	const handleGoogleSigniIn = () => {
		dispatch(googleSignInStart());
	};

	return (
		<div>
			<Grid item xs={12}>
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
								<TextField name="email" label="email"></TextField>
							</Grid>
							<Grid item xs={12}>
								<TextField
									type="password"
									name="password"
									label="password"
								></TextField>
							</Grid>
							<Grid item xs={12}>
								<ButtonMUI>Login</ButtonMUI>
							</Grid>
						</Grid>
					</Form>
				</Formik>
			</Grid>
			<Grid item xs={12}>
				<Button onClick={handleGoogleSigniIn}>SignIn with Google</Button>
			</Grid>

			<div className="links">
				<Link to="/recovery">Reset Password</Link>
			</div>
		</div>
	);
};

export default SignIn;
