import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import "./styles.scss";
import { signInUser } from "../../redux/User/user.actions";
import Button from "../forms/Button";
import { signInWithGoogle } from "../../firebase/utils";
import FormInput from "../forms/FormInput";
import AuthWrapper from "../AuthWrapper";

const mapState = ({ user }) => ({
	signInSucess: user.signInSucess
});

const SignIn = (props) => {
	const { signInSucess } = useSelector(mapState);
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	useEffect(() => {
		if (signInSucess) {
			resetForm();
			props.history.push("/");
		}
	}, [signInSucess]);

	const resetForm = () => {
		setEmail("");
		setPassword("");
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(signInUser({ email, password }));
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
							<Button onClick={signInWithGoogle}>SignIn with Google</Button>
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

export default withRouter(SignIn);
