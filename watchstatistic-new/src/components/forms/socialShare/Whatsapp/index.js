import React from "react";
import { Container } from "@material-ui/core";
import { WhatsappShareButton } from "react-share";
import { WhatsappIcon } from "react-share";

const FacebookShare = ({ ...otherProps }) => {
	const { quote, url } = otherProps;
	return (
		<Container>
			<WhatsappShareButton title={quote} url={url}>
				<WhatsappIcon size="2em" logoFillColor="white" round={true} />
			</WhatsappShareButton>
		</Container>
	);
};

export default FacebookShare;
