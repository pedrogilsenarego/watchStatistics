import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Select from "../../forms/SelectMUIFormik";
import TextField from "../../forms/InputMUI";
import watchTypes from "./../../../assets/data/watchTypes2.json";
import watchBrands from "./../../../assets/data/watchBrands2.json";
import pricesBracket from "./../../../assets/data/pricesBracket2.json";
import { makeStyles } from "@material-ui/core/styles";
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

const Section1 = () => {
	const classes = useStyles();
	const theme = useTheme();
	return (
		<Container maxWidth={"sm"}>
			<Grid container item spacing={1}>
				<Grid item xs={12} style={{ marginTop: "20vh" }}>
					<Typography>Submit here the details from the watch</Typography>
					<Divider
						style={{
							width: "100%",
							background: theme.palette.text.faded3,
							marginTop: "5px"
						}}
					/>
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
						<Select
							size="small"
							className={classes.textField}
							name="productCategory"
							label="Categories*"
							options={watchTypes}
						/>
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
						<Select
							className={classes.textField}
							size="small"
							name="productBrand"
							label="Brands*"
							options={watchBrands}
						/>
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
						<Select
							size="small"
							className={classes.textField}
							name="productPriceBrackets"
							label="Price Brackets*"
							options={pricesBracket}
						/>
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
						<Select
							size="small"
							className={classes.textField}
							name="movement"
							label="Type of movement"
							options={{
								Automatic: "Automatic",
								Quartz: "Quartz",
								MechaQuartz: "MechaQuartz",
								Manual: "Manual"
							}}
						/>
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
						<Select
							size="small"
							className={classes.textField}
							name="caseMaterial"
							label="Watch material"
							options={{
								Gold: "Gold",
								Plastic: "Plastic",
								"Stainless Steel": "Stainless Steel",
								Titanium: "Titanium",
								"White Gold": "White Gold"
							}}
						/>
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
						<Select
							size="small"
							className={classes.textField}
							name="waterResistance"
							label="Water Resistance"
							options={{
								"30meters": "30 meters",
								"50meters": "50 meters",
								"100meters": "100 meters",
								"200meters": "200 meters",
								"300meters": "300 meters"
							}}
						/>
					</Container>
				</Grid>
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
							name="yearProductionStart"
							placeholder="Start year"
						></TextField>
					</Container>
				</Grid>
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
							name="yearProductionEnd"
							placeholder="Finish year"
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
							name="caseSize"
							label="Case size"
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
							name="productName"
							placeholder="Model*"
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
							name="reference"
							placeholder="Reference*"
						></TextField>
					</Container>
				</Grid>
				<Divider
					style={{
						width: "100%",
						background: theme.palette.text.faded3,
						marginTop: "50px"
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

export default Section1;
