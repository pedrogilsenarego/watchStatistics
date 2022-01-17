import React from "react";
import {
	Dialog,
	DialogContent,
	DialogTitle,
	Typography
} from "@material-ui/core";

const Popup = (props) => {
	const { title, children, openPopup, setOpenPopup } = props;

	return (
		<div>
			<Dialog
				open={openPopup}
				onClick={() => {
					setOpenPopup(false);
				}}
			>
				<DialogTitle>
					<Typography style={{ color: "black" }}>{title}</Typography>
				</DialogTitle>
				<DialogContent dividers>{children}</DialogContent>
			</Dialog>
		</div>
	);
};
export default Popup;
