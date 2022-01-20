import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormInput from "../../forms/FormInput";
import Button from "../../forms/Button";
import {
	resetPasswordStart,
	resetUserState
} from "./../../../redux/User/user.actions";

const mapState = ({ user }) => ({
	resetPasswordSuccess: user.resetPasswordSuccess,
	userErr: user.userErr
});

const RecoverPwd = ({ handleCloseLoginMenu }) => {
	const { resetPasswordSuccess, userErr } = useSelector(mapState);
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [errors, setErrors] = useState([]);

	useEffect(
		() => {
			if (resetPasswordSuccess) {
				dispatch(resetUserState());
				handleCloseLoginMenu();
			}
		},
		// eslint-disable-next-line
		[resetPasswordSuccess]
	);

	useEffect(() => {
		if (Array.isArray(userErr) && userErr.length > 0) {
			setErrors(userErr);
		}
	}, [userErr]);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(resetPasswordStart({ email }));
	};

	return (
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
	);
};

export default RecoverPwd;
