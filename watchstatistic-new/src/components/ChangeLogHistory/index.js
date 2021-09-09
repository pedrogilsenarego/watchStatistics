import React from "react";

const ChangeLogHistory = () => {
	return (
		<div className="wrap">
			<div>
				<h2>1.1.2 - released 2021-09-09 </h2>
				<p>
					- The users when are registered now receive an email confirmation and
					are passed the role non-verified as default
				</p>
				<p>
					The votation system now calculates the Avg score for each own or not
					own category as also the totalAvg
				</p>
				<p>When a product is created now initialize the vote fields as 0</p>
			</div>
			<div>
				<h2>1.1.1 - released 2021-09-08 </h2>
				<p>- Option to Vote if Current User is Logged - Added</p>
				<p>
					- The Apply Vote know instead of create a new product updates the
					existent one. Also increments the number of total votes for the watch
					- Added
				</p>
				<p>
					- It is now possible to choose to vote between Own and Not Own watches
				</p>
				<p>
					- the voting system now sucessfully updates the values from the AVG
					votes instead of replacing the values
				</p>
				<p>
					Submitting a vote now correctly updates the redux-store and renders
					the votes
				</p>
			</div>
			<div>
				<h2>1.1 - released 2021-09-06 </h2>
				<p>
					- ProductDetail Votations Charts, values hardcoded into the Firestore
					- Added
				</p>
				<p>- Chart.js Dependencies - Added</p>
				<p>- MUI Dependencies - Added</p>
				<p>- Resources Page - Added</p>
				<p>- Filters for Search for types of Watch - Added - Search Page</p>
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
