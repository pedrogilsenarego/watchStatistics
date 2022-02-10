import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import ButtonMUI from "../../forms/ButtonMUI";
import Button from "@mui/material/Button";
import ProductDetailsPreview from "../../../pages/ProductDetailsPreview";
import Popup from "../../controls/Popup";

import { makeStyles } from "@material-ui/core/styles";

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

const Section3 = ({
	preview,
	setPreview,
	productThumbnail,
	productBackground,
	productDesc,
	additionalData,
	openBoxPopUp,
	setOpenBoxPopUp
}) => {
	const classes = useStyles();

	const configPreview = {
		productThumbnail,
		productBackground,
		productDesc,
		additionalData
	};

	return (
		<Container maxWidth={"sm"}>
			<Grid container item spacing={1}>
				<Grid item xs={12} style={{ paddingTop: "20vh" }}>
					{preview && <ButtonMUI>Refresh Preview</ButtonMUI>}
					{!preview && <ButtonMUI>Submit</ButtonMUI>}
				</Grid>
				<Grid item xs={12} style={{ paddingTop: "20px" }}>
					{preview && (
						<Button
							className={classes.textBtn}
							onClick={() => setPreview(!preview)}
						>
							I am ready to Submit
						</Button>
					)}
					{!preview && (
						<Button
							className={classes.textBtn}
							onClick={() => setPreview(!preview)}
						>
							Take me back
						</Button>
					)}
				</Grid>
			</Grid>

			<Popup
				title="Preview your watch"
				openPopup={openBoxPopUp}
				setOpenPopup={setOpenBoxPopUp}
			>
				<ProductDetailsPreview {...configPreview} />
			</Popup>
		</Container>
	);
};

export default Section3;
