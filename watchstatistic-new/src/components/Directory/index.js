import React from "react";

import { Container, Grid } from "@material-ui/core";

const Directory = (props) => {
	return (
		<Container>
			<Grid container>
				<div className="wrap">
					<h1>Welcome to Watchstatistics</h1>
					<p>
						At the moment it is only possible to search and vote for watches
						when loged In and The email was verified
					</p>

					<p>
						Thank you and have Fun wearing your watches and discussing with
						other entusiasts about them.
					</p>
				</div>
			</Grid>
		</Container>
	);
};

export default Directory;
