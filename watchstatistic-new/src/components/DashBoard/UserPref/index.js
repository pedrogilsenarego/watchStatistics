import { Typography } from "@material-ui/core";
import React from "react";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import TextField from "../../forms/InputMUI";
import ButtonMUI from "../../forms/ButtonMUI";

import { Form, Formik } from "formik";
import * as Yup from "yup";

import { useDispatch, useSelector } from "react-redux";
import { updateUserPreferences } from "../../../redux/User/user.actions";
import { useTheme } from "@material-ui/core";

const mapState = ({ user }) => ({
	currentUser: user.currentUser
});

const UserPref = (props) => {
	const dispatch = useDispatch();
	const { currentUser } = useSelector(mapState);
	const theme = useTheme();

	const handleChangeUserName = (values) => {
		const { username } = values;
		const configData = {
			...currentUser,
			userID: currentUser.id,
			displayName: username,
			flag: "username"
		};
		dispatch(updateUserPreferences(configData));
	};

	return (
		<Container>
			<Typography style={{ paddingTop: "20px" }}>Username</Typography>
			<Typography style={{ color: theme.palette.text.faded }}>
				Your current username is {currentUser.displayName}, You can change for a
				different name, however the watches submited will keep the old name.
			</Typography>
			<Divider
				style={{ width: "100%", background: theme.palette.text.faded2 }}
			/>
			<Container
				style={{
					marginTop: "20px",
					paddingTop: "20px",
					paddingBottom: "20px",
					display: "flex",
					alignItems: "center",
					backgroundColor: theme.palette.text.faded2
				}}
			>
				<Formik
					initialValues={{
						username: ""
					}}
					validationSchema={Yup.object().shape({
						username: Yup.string().required("Required")
					})}
					onSubmit={(values) => {
						handleChangeUserName(values);
					}}
				>
					<Form>
						<Container
							style={{
								marginTop: "20px",
								paddingTop: "20px",
								paddingBottom: "20px",
								display: "flex",
								alignItems: "center"
							}}
						>
							<TextField
								size="small"
								name="username"
								label={currentUser.displayName}
							></TextField>
							<ButtonMUI>Submit</ButtonMUI>
						</Container>
					</Form>
				</Formik>
			</Container>
		</Container>
	);
};

export default UserPref;
