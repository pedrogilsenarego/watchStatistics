import React from "react";

import Header from "./../components/Header";

const DashBoardLayout = (props) => {
	return (
		<div className="dashboardLayout">
			<Header {...props} />
		</div>
	);
};

export default DashBoardLayout;
