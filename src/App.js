import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./default.scss";
import { auth } from "./firebase/utils";

//pages
import Homepage from "./pages/Homepage";
import Registration from "./pages/Registration";
import Login from "./pages/Login";

// layouts
import HomepageLayout from "./layouts/HomepageLayout";

const initialState = {
	currentUser: null
};

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			...initialState
		};
	}

	authListener = null;

	componentDidMount() {
		this.authListener = auth.onAuthStateChanged();
	}
	componentWillUnmount() {}

	render() {
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
}

export default App;
