import React from "react";
import { Switch, Route } from "react-router-dom";
import "./default.scss";

//pages
import Homepage from "./pages/Homepage";
import Registration from "./pages/Registration";
import Login from "./pages/Login";

// layouts
import HomepageLayout from "./layouts/HomepageLayout";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route
					exact
					path="/"
					render={() => (
						<HomepageLayout>
							<Homepage />
						</HomepageLayout>
					)}
				/>
				<Route
					exact
					path="/registration"
					render={() => (
						<HomepageLayout>
							<Registration />
						</HomepageLayout>
					)}
				/>
				<Route
					exact
					path="/login"
					render={() => (
						<HomepageLayout>
							<Login />
						</HomepageLayout>
					)}
				/>
			</Switch>
		</div>
	);
}

export default App;
