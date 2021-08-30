import React from "react";
import ShopMen from "./../../assets/shopMens.jpg";
import ShopWomen from "./../../assets/shopWomens.jpg";
import "./styles.scss";

const Directory = (props) => {
	return (
		<div className="directory">
			<div className="wrap">
				<div
					className="item"
					style={{
						backgroundImage: `url(${ShopWomen})`
					}}
				></div>
				<div
					className="item"
					style={{
						backgroundImage: `url(${ShopMen})`
					}}
				></div>
			</div>
		</div>
	);
};

export default Directory;
