import React, { useState } from "react";
import { Box, Button, Menu, MenuItem } from "@material-ui/core";
import ProductVote from "../../ProductVote";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({}));

// eslint-disable-next-line
const ProductSidePanelMenu = ({}) => {
	const classes = useStyles();
	const [anchorVote, setAnchorVote] = useState(null);

	const handleCloseVote = () => {
		setAnchorVote(null);
	};

	return (
		<Box
			bgcolor={"primary.dark"}
			color={"text.secondary"}
			borderRadius="10px"
			style={{
				padding: "10px",
				paddingRight: "5px"
			}}
		>
			<Button
				aria-controls="vote"
				onClick={(e) => {
					setAnchorVote(e.currentTarget);
				}}
				disableRipple
				className={classes.textBtn}
			>
				Vote
			</Button>
			<Menu
				disableScrollLock
				className={classes.menu}
				id="vote"
				onClose={handleCloseVote}
				anchorEl={anchorVote}
				open={Boolean(anchorVote)}
			>
				<MenuItem disableRipple>
					<ProductVote />
				</MenuItem>
			</Menu>
		</Box>
	);
};

export default ProductSidePanelMenu;
