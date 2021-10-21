import React from "react";
import { Container } from "@material-ui/core";
import { WhatsappShareButton } from "react-share";
import { WhatsappIcon } from "react-share";

const FacebookShare = ({ ...otherProps }) => {
	const { quote, url } = otherProps;
	return (
		<div>
			<Container>
				<WhatsappShareButton title={quote} url={url}>
					<WhatsappIcon iconFillColor="white" size="7vh" round={true} />
				</WhatsappShareButton>
			</Container>
		</div>
	);
};

export default FacebookShare;
