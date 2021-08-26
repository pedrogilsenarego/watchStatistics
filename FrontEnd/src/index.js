import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "./services/redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";

const store = configureStore();

ReactDOM.render(
	<ReduxProvider store={store}>
		<Router>
			<Helmet>
				<meta charSet="utf-8" />
				<title>WatchStatistics</title>
			</Helmet>
			<App />
		</Router>
	</ReduxProvider>,

	document.getElementById("root")
);
