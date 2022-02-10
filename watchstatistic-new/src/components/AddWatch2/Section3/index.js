import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ButtonMUI from "../../forms/ButtonMUI";
import Multiline from "../../forms/MultiLineMUI";
import Select from "../../forms/SelectMUIFormik";
import TextField from "../../forms/InputMUI";
import watchTypes from "./../../../assets/data/watchTypes2.json";
import watchBrands from "./../../../assets/data/watchBrands2.json";
import pricesBracket from "./../../../assets/data/pricesBracket2.json";
import { makeStyles } from "@material-ui/core/styles";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import Divider from "@mui/material/Divider";
import { useTheme } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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
	},

	textBtn: {
		color: "#FFFFFF",
		fontSize: "13px",
		backgroundColor: "#00000066",
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

const Section3 = ({ preview }) => {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<Container maxWidth={"sm"}>
			<Grid container item spacing={1}>
				<Grid item xs={12} style={{ paddingTop: "20vh" }}>
					{preview && <ButtonMUI>Refresh Preview</ButtonMUI>}
					{!preview && <ButtonMUI>Submit</ButtonMUI>}
				</Grid>
			</Grid>
		</Container>
	);
};

export default Section3;
