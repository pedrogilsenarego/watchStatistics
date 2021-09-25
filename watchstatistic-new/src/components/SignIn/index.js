import React from "react";
import { useDispatch } from "react-redux";
import {
	emailSignInStart,
	googleSignInStart
} from "../../redux/User/user.actions";

import * as Yup from "yup";
import { Grid, Button } from "@material-ui/core";
import { Form, Formik } from "formik";
import TextField from "../forms/InputMUI";
import ButtonMUI from "../forms/ButtonMUI";

import { FcGoogle } from "react-icons/fc";

const INITIAL_FORM_STATE = {
	email: "",
	password: ""
};

const FORM_VALIDATION = Yup.object().shape({
	email: Yup.string().required("Required"),
	password: Yup.string().required("Required")
});

const SignIn = ({ handleCloseLoginMenu }) => {
	const dispatch = useDispatch();

	const handleFormSubmit = (event) => {
		const { email, password } = event;
		dispatch(
			emailSignInStart({
				email,
				password
			})
		);
		handleCloseLoginMenu();
		return false;
	};

	const handleGoogleSigniIn = () => {
		dispatch(googleSignInStart());
		handleCloseLoginMenu();
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
							<Grid item xs={12} style={{ paddingTop: "20px" }}>
								<ButtonMUI>Login</ButtonMUI>
							</Grid>
						</Grid>
					</Form>
				</Formik>
			</Grid>
			<Grid item xs={12} style={{ paddingTop: "10px" }}>
				<Button
					onClick={handleGoogleSigniIn}
					variant={"contained"}
					fullWidth={true}
					style={{ backgroundColor: "#4285F4", color: "#FFFFFF" }}
				>
					<FcGoogle size={"2em"} />
				</Button>
			</Grid>

			<div className="links" style={{ paddingTop: "10px" }}>
				<Button href="/recovery">Reset Password</Button>
			</div>
		</div>
	);
};

export default SignIn;
