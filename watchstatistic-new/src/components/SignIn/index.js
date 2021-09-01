import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "./styles.scss";
import {
	emailSignInStart,
	googleSignInStart
} from "../../redux/User/user.actions";
import Button from "../forms/Button";
import FormInput from "../forms/FormInput";
import AuthWrapper from "../AuthWrapper";

const mapState = ({ user }) => ({
	currentUser: user.currentUser
});

const SignIn = (props) => {
	const history = useHistory();
	const { currentUser } = useSelector(mapState);
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	useEffect(
		() => {
			if (currentUser) {
				resetForm();
				history.push("/");
			}
		},
		// eslint-disable-next-line
		[currentUser]
	);

	const resetForm = () => {
		setEmail("");
		setPassword("");
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(emailSignInStart({ email, password }));
	};

	const handleGoogleSigniIn = () => {
		dispatch(googleSignInStart());
	};

	const configAuthWrapper = {
		headline: "Login"
	};

	return (
		<AuthWrapper {...configAuthWrapper}>
			<div className="formWrap">
				<form onSubmit={handleSubmit}>
					<FormInput
						type="email"
						name="email"
						value={email}
						placeholder="email"
						handleChange={(e) => setEmail(e.target.value)}
					/>
					<FormInput
						type="password"
						name="password"
						value={password}
						placeholder="Password"
						handleChange={(e) => setPassword(e.target.value)}
					/>
					<Button type="submit">LogIn</Button>
					<div className="socialSignin">
						<div className="row">
							<Button onClick={handleGoogleSigniIn}>SignIn with Google</Button>
						</div>
					</div>
					<div className="links">
						<Link to="/recovery">Reset Password</Link>
					</div>
				</form>
			</div>
		</AuthWrapper>
	);
};

export default SignIn;
