import React from "react";

import { FacebookShareButton } from "react-share";
import { FacebookIcon } from "react-share";

const FacebookShare = ({ ...otherProps }) => {
	const { quote, url } = otherProps;
	return (
		<FacebookShareButton
			url={url}
			quote={quote}
			hashtag="#VoteForWatches"
			style={{ transform: "translateY(2px)" }}
		>
			<FacebookIcon size="7vh" logoFillColor="white" round={true} />
		</FacebookShareButton>
	);
};

export default FacebookShare;
