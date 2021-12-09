import React from "react";
import { Container } from "@material-ui/core";
import { FacebookShareButton } from "react-share";
import { FacebookIcon } from "react-share";

const FacebookShare = ({ ...otherProps }) => {
	const { quote, url } = otherProps;
	return (
		<Container>
			<FacebookShareButton url={url} quote={quote} hashtag="#VoteForWatches">
				<FacebookIcon size="7vh" logoFillColor="white" round={true} />
			</FacebookShareButton>
		</Container>
	);
};

export default FacebookShare;
