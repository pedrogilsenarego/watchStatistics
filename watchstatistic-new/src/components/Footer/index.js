import React from "react";
import Box from "@mui/material/Box";
import Typograpy from "@mui/material/Typography";
import { BsFillDiamondFill } from "react-icons/bs";

import { useMediaQuery, useTheme } from "@material-ui/core";

const Footer = () => {
	const theme = useTheme();
	const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
	return (
		<div>
			{!isMatch && (
				<Box
					style={{
						position: "absolute",
						cursor: "pointer",
						right: "20px",
						marginTop: "25px",
						border: "solid 2px",
						padding: "5px",
						color: "#ffffffB3",
						borderColor: "#ffffff66",
						borderRadius: "2px"
					}}
				>
					<Typograpy style={{ fontSize: "15px" }}>Send Feedback</Typograpy>
				</Box>
			)}

			<Box
				sx={{
					display: isMatch ? "block" : "flex",
					marginTop: "30vh",
					width: "100vw",
					padding: "30px",
					backgroundColor: "#18161E",
					borderTop: "solid 0.8px",
					borderTopColor: "#ffffff66",
					color: "#ffffffB3"
				}}
			>
				{isMatch && (
					<Box
						style={{
							cursor: "pointer",
							width: "150px",
							border: "solid 2px",
							padding: "5px",
							color: "#ffffffB3",
							borderColor: "#ffffff66",
							borderRadius: "2px",
							display: "flex",
							justifyContent: "center",
							alignItems: "center"
						}}
					>
						<Typograpy
							style={{
								fontSize: "15px"
							}}
						>
							Send Feedback
						</Typograpy>
					</Box>
				)}
				<Typograpy
					style={{
						fontSize: "15px",
						cursor: "pointer",
						marginTop: isMatch ? "20px" : "0px",
						display: "flex",
						justifyContent: "center",
						alignItems: "center"
					}}
				>
					Terms and Conditions &nbsp;{" "}
					{!isMatch && (
						<BsFillDiamondFill
							style={{ marginBottom: "2px" }}
							fontSize={"0.3em"}
						/>
					)}
				</Typograpy>
				<Typograpy
					style={{
						fontSize: "15px",
						cursor: "pointer",
						marginTop: isMatch ? "20px" : "0px",
						display: "flex",
						justifyContent: "center",
						alignItems: "center"
					}}
				>
					&nbsp; Privacy Policy &nbsp;
					{!isMatch && (
						<BsFillDiamondFill
							style={{ marginBottom: "2px" }}
							fontSize={"0.3em"}
						/>
					)}
				</Typograpy>
				<Typograpy
					style={{
						fontSize: "15px",
						marginTop: isMatch ? "20px" : "0px",
						cursor: "pointer",
						display: "flex",
						justifyContent: "center",
						alignItems: "center"
					}}
				>
					&nbsp; FAQ &nbsp;
					{!isMatch && (
						<BsFillDiamondFill
							style={{ marginBottom: "2px" }}
							fontSize={"0.3em"}
						/>
					)}
				</Typograpy>
				<Typograpy
					style={{
						fontSize: "15px",
						cursor: "pointer",
						marginTop: isMatch ? "20px" : "0px",
						display: "flex",
						justifyContent: "center",
						alignItems: "center"
					}}
				>
					&nbsp; Author &nbsp;
					{!isMatch && (
						<BsFillDiamondFill
							style={{ marginBottom: "2px" }}
							fontSize={"0.3em"}
						/>
					)}
				</Typograpy>
				<Typograpy
					style={{
						fontSize: "15px",
						cursor: "pointer",
						marginTop: isMatch ? "20px" : "0px",
						display: "flex",
						justifyContent: "center",
						alignItems: "center"
					}}
				>
					&nbsp; Features &nbsp;
					{!isMatch && (
						<BsFillDiamondFill
							style={{ marginBottom: "2px" }}
							fontSize={"0.3em"}
						/>
					)}
				</Typograpy>
				<Typograpy
					style={{
						fontSize: "15px",
						cursor: "pointer",
						marginTop: isMatch ? "20px" : "0px",
						display: "flex",
						justifyContent: "center",
						alignItems: "center"
					}}
				>
					&nbsp; About &nbsp;
				</Typograpy>
			</Box>
		</div>
	);
};

export default Footer;
