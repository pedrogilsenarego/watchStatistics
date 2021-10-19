import React from "react";
import { Helmet } from "react-helmet";

const HelmetMetaData = (props) => {
	return (
		<Helmet>
			<title>Watchstatistics</title>
			<meta property="og:title" content="Watchstatistics" />
			<meta
				property="og:description"
				content="Vote website for watch enthusiasts"
			/>
			<meta
				property="og:image"
				content="https://cdn2.chrono24.com/images/uhren/20143721-g85qbdjhj5d8a5ktu76u3n5l-ExtraLarge.jpg"
			/>
			<meta
				property="og:url"
				content={window.location.pathname + window.location.search}
			/>
			<meta name="twitter:card" content="summary_large_image" />
		</Helmet>
	);
};

export default HelmetMetaData;
