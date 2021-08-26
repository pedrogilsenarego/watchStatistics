import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
	<Router>
		<Helmet>
			<meta charSet="utf-8" />
			<title>WatchStatistics</title>
		</Helmet>
		<App />
	</Router>,

	document.getElementById("root")
);
