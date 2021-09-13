import React from "react";

import { Container, Grid } from "@material-ui/core";

const Directory = (props) => {
	return (
		<Container>
			<Grid container>
				<div className="wrap">
					<h1>Welcome to Watchstatistics</h1>
					<p>
						This is a new project to let you experience what is the opinion from
						watch entusiasts about their watches and about other person watches.
					</p>
					<p>
						This also a personal project where I am applying while I learn
						webApp tehcnologies, you can check here more about the project and
						chronological status.{" "}
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
