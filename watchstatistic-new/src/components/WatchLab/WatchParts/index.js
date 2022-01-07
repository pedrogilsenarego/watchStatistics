import React, { useState } from "react";
import {
	Grid,
	Typography,
	Box,
	Paper,
	Button,
	ButtonGroup
} from "@material-ui/core";

const data = [
	{ title: "Available Parts", items: [1, 2, 3] },
	{ title: "Fusion Machine", items: [4, 5, 6] }
];

const WatchParts = () => {
	const [list, setList] = useState(data);
	const handleDragStart = (e, params) => {
		console.log("drgging", params);
	};
	return (
		<div>
			<Typography>Test</Typography>
			<Paper style={{ padding: "10px" }}>
				{list.map((grp, grpI) => (
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
						<Grid container>
							<Grid xs={12}>
								<Typography>{grp.title}</Typography>
							</Grid>
							<Grid xs={12}>
								{grp.items.map((item, itemI) => (
									<Box
										onDragStart={(e) => {
											handleDragStart(e, { grpI, itemI });
										}}
										draggable={true}
										key={item}
										style={{
											cursor: "pointer",
											backgroundColor: "lightGrey",
											margin: "5px",
											padding: "5px",
											borderRadius: "3px"
										}}
									>
										<Typography style={{ color: "black" }}>{item}</Typography>
									</Box>
								))}
							</Grid>
						</Grid>
					</Box>
				))}
			</Paper>
		</div>
	);
};
export default WatchParts;
