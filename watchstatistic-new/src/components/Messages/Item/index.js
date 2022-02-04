import React from "react";

const Item = ({ item, pos }) => {
	return (
		<div>
			<p>
				{item.from} - {item.message}
			</p>
		</div>
	);
};

export default Item;
