import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Multiline from "../../forms/MultiLineMUI";

import TextField from "../../forms/InputMUI";

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

const Section2 = ({
	isMatch,
	additionalProductThumbnail2,
	setAdditionalProductThumbnail2,
	additionalProductThumbnail3,
	setAdditionalProductThumbnail3,
	additionalProductThumbnail4,
	setAdditionalProductThumbnail4
}) => {
	const classes = useStyles();
	const theme = useTheme();

	const [helperDescriptionImages, setHelperDescriptionImages] = useState(false);

	return (
		<Container maxWidth={"sm"}>
			<Grid container item spacing={1}>
				<Grid item xs={12} style={{ marginTop: "15vh", display: "flex" }}>
					<Typography>Choose the Images</Typography>
					<Button disableRipple>
						<AiOutlineQuestionCircle
							onClick={() =>
								setHelperDescriptionImages(!helperDescriptionImages)
							}
							fontSize="1.5em"
							color="white"
							style={{ marginTop: "-3px" }}
						/>
					</Button>
				</Grid>
				<Divider
					style={{
						width: "100%",
						background: theme.palette.text.faded3,
						marginTop: "5px"
					}}
				/>
				<Grid item xs={6} style={{ marginTop: "10px" }}>
					<Container
						style={{
							backgroundColor: theme.palette.textField.background,
							height: "40px",
							padding: "0px",

							borderRadius: "4px"
						}}
					>
						<TextField
							size="small"
							className={classes.textField}
							name="productThumbnail"
							placeholder="Main Image*"
						></TextField>
					</Container>
				</Grid>

				{additionalProductThumbnail2 && (
					<Grid item xs={3} style={{ marginTop: "10px" }}>
						<Container
							style={{
								backgroundColor: theme.palette.textField.background,
								height: "40px",
								padding: "0px",

								borderRadius: "4px"
							}}
						>
							<TextField
								size="small"
								className={classes.textField}
								name="productThumbnail2"
								placeholder="Additional Image"
							></TextField>
						</Container>
					</Grid>
				)}
				{additionalProductThumbnail3 && (
					<Grid item xs={3} style={{ marginTop: "10px" }}>
						<Container
							style={{
								backgroundColor: theme.palette.textField.background,
								height: "40px",
								padding: "0px",

								borderRadius: "4px"
							}}
						>
							<TextField
								size="small"
								className={classes.textField}
								name="productThumbnail3"
								label="Additional Image 2"
							></TextField>
						</Container>
					</Grid>
				)}
				{additionalProductThumbnail4 && (
					<Grid item xs={3} style={{ marginTop: "10px" }}>
						<Container
							style={{
								backgroundColor: theme.palette.textField.background,
								height: "40px",
								padding: "0px",

								borderRadius: "4px"
							}}
						>
							<TextField
								size="small"
								className={classes.textField}
								name="productThumbnail4"
								label="Additional Image 3"
							></TextField>
						</Container>
					</Grid>
				)}
				{!additionalProductThumbnail4 && (
					<Grid item xs={6}>
						<Button
							className={classes.textBtn}
							style={{ marginTop: "10px" }}
							onClick={() => {
								if (!additionalProductThumbnail2)
									setAdditionalProductThumbnail2(true);
								if (additionalProductThumbnail2)
									setAdditionalProductThumbnail3(true);
								if (additionalProductThumbnail3)
									setAdditionalProductThumbnail4(true);
							}}
						>
							Additional Image
						</Button>
					</Grid>
				)}
				<Grid item xs={6} style={{ marginTop: "10px" }}>
					<Container
						style={{
							backgroundColor: theme.palette.textField.background,
							height: "40px",
							padding: "0px",

							borderRadius: "4px"
						}}
					>
						<TextField
							size="small"
							className={classes.textField}
							name="productBackground"
							label="Background Image*"
						></TextField>
					</Container>
				</Grid>
				<Grid
					item
					xs={12}
					style={{ marginTop: isMatch ? "20px" : "40px", display: "flex" }}
				>
					<Typography>Additional Information</Typography>
					<Button disableRipple>
						<AiOutlineQuestionCircle
							onClick={() =>
								setHelperDescriptionImages(!helperDescriptionImages)
							}
							fontSize="1.5em"
							color="white"
							style={{ marginTop: "-3px" }}
						/>
					</Button>
				</Grid>
				<Divider
					style={{
						width: "100%",
						background: theme.palette.text.faded3,
						marginTop: "5px"
					}}
				/>

				<Grid item xs={12} style={{ marginTop: "10px" }}>
					<Container
						style={{
							backgroundColor: theme.palette.textField.background,
							height: "60px",
							padding: "0px",

							borderRadius: "4px"
						}}
					>
						<Multiline
							className={classes.textField}
							name="productDesc"
							label="Description from Watch*"
						></Multiline>
					</Container>
				</Grid>

				<Grid item xs={6} style={{ marginTop: "10px" }}>
					<Container
						style={{
							backgroundColor: theme.palette.textField.background,
							height: "40px",
							padding: "0px",

							borderRadius: "4px"
						}}
					>
						<TextField
							size="small"
							className={classes.textField}
							name="additionalDataTitle"
							placeholder="Title*  ex:Hodinkee"
						></TextField>
					</Container>
				</Grid>
				<Grid item xs={6} style={{ marginTop: "10px" }}>
					<Container
						style={{
							backgroundColor: theme.palette.textField.background,
							height: "40px",
							padding: "0px",

							borderRadius: "4px"
						}}
					>
						<TextField
							size="small"
							className={classes.textField}
							name="additionalDataLink"
							placeholder="Link*  ex:https://www.hodinkee.com/articles/..."
						></TextField>
					</Container>
				</Grid>

				<Divider
					style={{
						width: "100%",
						background: theme.palette.text.faded3,
						marginTop: "30px"
					}}
				/>
				<Typography
					variant="subheader1"
					style={{ paddingLeft: "8px", marginTop: "10px" }}
				>
					* fields have to be filled
				</Typography>
			</Grid>
		</Container>
	);
};

export default Section2;
