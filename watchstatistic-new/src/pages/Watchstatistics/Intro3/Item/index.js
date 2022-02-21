import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { useHistory } from "react-router-dom";

const Item = ({ title, path, icon }) => {
	const history = useHistory();
	return (
		<Grid item xs={6} onClick={() => history.push(path)}>
			<Box
				style={{
					textAlign: "center",
					cursor: "pointer",
					border: "solid 1.5px",
					borderRadius: "10px",
					borderColor: "hotpink",
					padding: "10px"
				}}
			>
				{icon}
				<Typography style={{ color: "hotPink" }}>{title}</Typography>
			</Box>
		</Grid>
	);
};

export default Item;
