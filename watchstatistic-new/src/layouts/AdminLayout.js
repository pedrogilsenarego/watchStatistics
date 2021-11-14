import React from "react";

import Header from "./../components/Header";

const AdminLayout = (props) => {
	return (
		<div className="adminLayout">
			<Header {...props} />
		</div>
	);
};

export default AdminLayout;
