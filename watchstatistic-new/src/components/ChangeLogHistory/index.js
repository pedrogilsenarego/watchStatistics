import React from "react";

const ChangeLogHistory = (props) => {
	return (
		<div className="wrap">
			<div>
				<h2>1.1 - released 2021- </h2>
				<p>- Dependencies - Added Chart.js</p>
				<p>- Dependencies - Added MUI</p>
			</div>
			<div>
				<h2>1.01 - released 2021-09-04 </h2>
				<p>- Home Page - cleaned, welcoming added</p>
				<p>- Changelog Page - Added</p>
			</div>
			<div>
				<h2>1.00 - released 2021-09-03 </h2>
				<p>- Initial Deploy from webSite</p>
				<p>- Implementing of React, Redux, Firebase, Sagas</p>
				<p>
					- Templated Used from the tutorial -
					https://www.youtube.com/watch?v=suSru31zjoA&list=PL-Db3tEF6pB8UO2MmccX-5qeGDX9rek7Q
				</p>
			</div>
		</div>
	);
};

export default ChangeLogHistory;
