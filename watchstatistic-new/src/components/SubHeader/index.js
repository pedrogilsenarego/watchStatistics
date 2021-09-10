import React from "react";
import { Box } from "@material-ui/core";

const SubHeader = (props) => {
	return (
		<subheader>
			<Box
				px={{ xs: 10 }}
				py={{ xs: 10 }}
				bgcolor="primary.light"
				color={"#dcdae0"}
				textAlign="center"
			></Box>
			<Box
				px={{ xs: 10 }}
				py={{ xs: 5 }}
				bgcolor={"primary.main"}
				color={"#dcdae0"}
				textAlign="center"
			></Box>
		</subheader>
	);
};

export default SubHeader;
