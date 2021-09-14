import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { signUpUserStart } from "./../../redux/User/user.actions";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "../forms/InputMUI";
import CheckBox from "../forms/checkBoxMUI";
import ButtonMUI from "../forms/ButtonMUI";
import AuthWrapper from "./../AuthWrapper";

const useStyles = makeStyles((theme) => ({
	formWrapper: {
		marginTop: theme.spacing(5),
		marginBottom: theme.spacing(8)
	}
}));

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
	const classes = useStyles();

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

	const configAuthWrapper = {
		headline: "Registration"
	};

	return (
		<AuthWrapper {...configAuthWrapper}>
			<div className={classes.formWrapper}>
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
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<Typography>Register Here</Typography>
							</Grid>
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
							<Grid item xs={12}>
								<CheckBox
									name="termsOfService"
									legend="Terms of Service"
									label="I, agree"
								/>
							</Grid>
							<Grid item xs={12}>
								<ButtonMUI>Submit</ButtonMUI>
							</Grid>
						</Grid>
					</Form>
				</Formik>
			</div>

			<div className="links">
				<Link to="/login">LogIn</Link>
				{` | `}
				<Link to="/recovery">Reset Password</Link>
			</div>
		</AuthWrapper>
	);
};

export default Signup;
