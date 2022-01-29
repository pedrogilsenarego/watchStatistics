import React from "react";
import Sugested2Vote from "./Sugested2Vote";
import Container from "@mui/material/Container";

const HomePage = () => {
	return (
		<div>
			<Container style={{ marginTop: "80px" }}>
				<Sugested2Vote />
			</Container>
		</div>
	);
};

export default HomePage;
