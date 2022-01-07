import React from "react";
import {
	Grid,
	Typography,
	Box,
	Paper,
	Button,
	ButtonGroup,
	Menu,
	MenuItem
} from "@material-ui/core";

const data = [
	{ title: "Available Parts", items: [1, 2, 3] },
	{ title: "Fusion Machine", items: [4, 5, 6] }
];

const WatchParts = () => {
	return (
		<div>
			<Typography>Test</Typography>
			<Paper style={{ padding: "10px" }}>
				{data.map((grp, grpI) => (
					<Box
						style={{
							backgroundColor: "grey",
							margin: "10px",
							padding: "10px",
							borderRadius: "5px",
							display: "flex",
							justifyContent: "center"
						}}
						key={grp.title}
					>
						{grp.items.map((item, itemI) => (
							<Box
								style={{
									backgroundColor: "lightGrey",
									margin: "5px",
									padding: "5px",
									borderRadius: "3px"
								}}
							>
								<Typography style={{ color: "black" }} key={item}>
									{item}
								</Typography>
							</Box>
						))}
					</Box>
				))}
			</Paper>
		</div>
	);
};
export default WatchParts;
