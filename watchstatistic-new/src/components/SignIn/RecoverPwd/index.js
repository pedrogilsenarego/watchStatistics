import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { TextField, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@mui/material/Container";
import {
	resetPasswordStart,
	resetUserState
} from "./../../../redux/User/user.actions";
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
	},
	textBtn: {
		color: "#FFFFFF",
		fontSize: "13px",
		backgroundColor: "!important #00000066",
		border: "solid 2px",
		borderColor: "orange",
		borderRadius: "14px",
		"&:hover": {
			color: "#FFA500",
			backgroundColor: "#ffffff00"
		},
		"&:active": {
			color: "#FFFFFF"
		}
	}
}));
const mapState = ({ user }) => ({
	resetPasswordSuccess: user.resetPasswordSuccess,
	userErr: user.userErr
});

const RecoverPwd = ({ handleCloseLoginMenu }) => {
	const { resetPasswordSuccess, userErr } = useSelector(mapState);
	const dispatch = useDispatch();
	const classes = useStyles();
	const [email, setEmail] = useState("");
	const [errors, setErrors] = useState([]);
	const theme = useTheme();

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
						size="small"
						name="email"
						value={email}
						placeholder="Email"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</Container>
				<Button
					className={classes.textBtn}
					style={{ marginTop: "15px" }}
					variant="contained"
					size="small"
					type="submit"
				>
					Recover Password
				</Button>
			</form>
		</div>
	);
};

export default RecoverPwd;
