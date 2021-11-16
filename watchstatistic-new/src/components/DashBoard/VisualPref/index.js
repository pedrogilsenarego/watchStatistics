import { Typography } from "@material-ui/core";
import React from "react";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";

import Switch from "@mui/material/Switch";

import { useDispatch, useSelector } from "react-redux";
import { updateUserPreferences } from "../../../redux/User/user.actions";
import { useTheme } from "@material-ui/core";

const mapState = ({ user }) => ({
	currentUser: user.currentUser
});

const VisualPref = (props) => {
	const dispatch = useDispatch();
	const { currentUser } = useSelector(mapState);
	const theme = useTheme();

	const configData = {
		...currentUser,
		userID: currentUser.id,
		backgroundImageOff: currentUser.backgroundImageOff ? false : true,
		flag: "backgroundImage"
	};
	const handleSetImageBackGround = () => {
		dispatch(updateUserPreferences(configData));
	};

	const configDataTheme = {
		...currentUser,
		userID: currentUser.id,
		theme: currentUser.theme ? false : true,
		flag: "theme"
	};
	const handleSetTheme = () => {
		dispatch(updateUserPreferences(configDataTheme));
	};

	const label = { inputProps: { "aria-label": "Switch demo" } };

	return (
		<Container>
			<Typography style={{ paddingTop: "20px" }}>Global Theme</Typography>
			<Typography style={{ color: theme.palette.text.faded }}>
				Set here if you prefer a light or dark theme here
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
				<Switch
					onClick={() => {
						handleSetTheme();
					}}
					checked={!currentUser.theme}
					{...label}
					color="primary"
				/>
				{!currentUser.theme && <Typography>Dark Theme is on</Typography>}
				{currentUser.theme && <Typography>Ligh Theme is on</Typography>}
			</Container>
			<Typography style={{ paddingTop: "20px" }}>Watch Details</Typography>
			<Typography style={{ color: theme.palette.text.faded }}>
				You can change if the background image is shown when visualizing a watch
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
				<Switch
					onClick={() => {
						handleSetImageBackGround();
					}}
					checked={!currentUser.backgroundImageOff}
					{...label}
					color="primary"
				/>
				{!currentUser.backgroundImageOff && (
					<Typography>Background Image is currently On</Typography>
				)}
				{currentUser.backgroundImageOff && (
					<Typography>Background Image is currently Off</Typography>
				)}
			</Container>
		</Container>
	);
};

export default VisualPref;
