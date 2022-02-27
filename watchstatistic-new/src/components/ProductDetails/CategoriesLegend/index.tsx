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
			<Item title="L brand" />
			<Item title="K refinement" />
			<Item title="R history" />
			<Item title="Q engineering" />
			<Item title="O x-factor" />
		</div>
	);
};

export default CategoriesLegend;
