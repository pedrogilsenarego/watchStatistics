import React from "react";

interface Props {
	item: { from: string; message: string };
	pos: number;
}

const Item = ({ item, pos }: Props) => {
	return (
		<div>
			<p>
				{item.from} - {item.message}
			</p>
		</div>
	);
};

export default Item;
