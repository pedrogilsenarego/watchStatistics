import React from "react";
import Item from "./Item";

// eslint-disable-next-line
const CategoriesLegend = () => {
	return (
		<div style={{}}>
			<Item
				title="S aesthetics"
				message="Relates to the general aspect of the watch, a very personal choice"
			/>
			<Item
				title="M price/quality"
				message="The overall relative quality compared to the price tag"
			/>
			<Item
				title="L brand"
				message="In your opinion how is valued the Brand, different factors can be taken in account, history of the brand, perception of the community etc.  "
			/>
			<Item
				title="K refinement"
				message="The touch of the watch, the crispness, the materials used..."
			/>
			<Item
				title="R history"
				message="Does this model has value in the history of horology?"
			/>
			<Item
				title="Q engineering"
				message="Does the watch bring any contribution for the engineering of the watch world?"
			/>
			<Item
				title="O x-factor"
				message="The factor that has no explanation, just what the watch make you feel like"
			/>
		</div>
	);
};

export default CategoriesLegend;
