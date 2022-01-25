import React from "react";
import Container from "@mui/material/Container";
import Boxes from "../Boxes";

const Slider = ({ x }) => {
	const configBoxes = {
		x
	};

	let sliderArr = [
		<Boxes {...configBoxes} />,
		<Boxes {...configBoxes} />,
		3,
		4
	];

	return (
		<div style={{ height: "100vh", width: "100%", display: "flex" }}>
			{sliderArr.map((item, index) => {
				return (
					<Container
						style={{
							minWidth: "100%",
							zIndex: "1",
							transition: "0.5s",
							transform: `translateX(${x}%)`
						}}
						key={index}
					>
						{item}
					</Container>
				);
			})}
		</div>
	);
};

export default Slider;
