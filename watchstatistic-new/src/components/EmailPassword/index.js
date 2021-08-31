import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.scss";
import AuthWrapper from "../AuthWrapper";
import FormInput from "../forms/FormInput";
import Button from "../forms/Button";
import {
	resetPassword,
	resetAllAuthForms
} from "./../../redux/User/user.actions";
import { withRouter } from "react-router";

const mapState = ({ user }) => ({
	resetPasswordSucess: user.resetPasswordSucess,
	resetPasswordError: user.resetPasswordError
});

const EmailPassword = (props) => {
	const { resetPasswordSucess, resetPasswordError } = useSelector(mapState);
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [errors, setErrors] = useState([]);

	useEffect(
		() => {
			if (resetPasswordSucess) dispatch(resetAllAuthForms());
			props.history.push("/login");
		},
		// eslint-disable-next-line
		[resetPasswordSucess]
	);

	useEffect(() => {
		if (Array.isArray(resetPasswordError) && resetPasswordError.length > 0) {
			setErrors(resetPasswordError);
		}
	}, [resetPasswordError]);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(resetPassword({ email }));
	};

	const configAuthWrapper = {
		headline: "Email Password"
	};
	return (
		<AuthWrapper {...configAuthWrapper}>
			<div className="formWrap">
				{errors.length > 0 && (
					<ul>
						{errors.map((e, index) => {
							return <li key={index}>{e}</li>;
						})}
					</ul>
				)}
				<form onSubmit={handleSubmit}>
					<FormInput
						type="email"
						name="email"
						value={email}
						placeholder="Email"
						handleChange={(e) => setEmail(e.target.value)}
					/>
					<Button type="submit">Email Password</Button>
				</form>
			</div>
		</AuthWrapper>
	);
};

export default withRouter(EmailPassword);
