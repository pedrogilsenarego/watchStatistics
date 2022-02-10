import React from "react";
import Grid from "@mui/material/Grid";
import ButtonGroup from "@mui/material/ButtonGroup";
import ButtonMUI from "../../forms/ButtonMUI";
import Button from "@mui/material/Button";
import ProductDetailsPreview from "../../../pages/ProductDetailsPreview";
import Popup from "../../controls/Popup";

const Section3 = ({
	preview,
	setPreview,
	productThumbnail,
	productBackground,
	productDesc,
	additionalData,
	openBoxPopUp,
	setOpenBoxPopUp,
	isMatch
}) => {
	const configPreview = {
		productThumbnail,
		productBackground,
		productDesc,
		additionalData
	};

	return (
		<>
			<Grid
				container
				item
				spacing={1}
				direction="column"
				alignItems={isMatch ? "center" : null}
				justifyContent="center"
				style={{
					position: "absolute",
					marginTop: "84vh",
					marginLeft: isMatch ? "0px" : "58vw",
					padding: "10px",

					borderRadius: "40px"
				}}
			>
				<Grid item xs={12}>
					<ButtonGroup>
						{preview && (
							<ButtonMUI
								style={{
									textTransform: "none",
									backgroundColor: "black",
									color: "orange",
									border: "solid 1.5px",
									borderColor: "orange"
								}}
							>
								Preview
							</ButtonMUI>
						)}
						{!preview && (
							<ButtonMUI
								style={{
									textTransform: "none",
									backgroundColor: "black",
									color: "orange",
									border: "solid 1.5px",
									borderColor: "orange"
								}}
							>
								Submit
							</ButtonMUI>
						)}

						{preview && (
							<Button
								style={{
									textTransform: "none",
									backgroundColor: "black",
									color: "orange",
									border: "solid 1.5px",
									borderColor: "orange"
								}}
								onClick={() => setPreview(!preview)}
							>
								Submit
							</Button>
						)}
						{!preview && (
							<Button
								style={{
									textTransform: "none",
									backgroundColor: "black",
									color: "orange",
									border: "solid 1.5px",
									borderColor: "orange"
								}}
								onClick={() => setPreview(!preview)}
							>
								Back
							</Button>
						)}
					</ButtonGroup>
				</Grid>
			</Grid>

			<Popup
				title="Preview your watch"
				openPopup={openBoxPopUp}
				setOpenPopup={setOpenBoxPopUp}
			>
				<ProductDetailsPreview {...configPreview} />
			</Popup>
		</>
	);
};

export default Section3;
