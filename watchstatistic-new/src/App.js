import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import "./default.scss";
import { checkUserSession } from "./redux/User/user.actions";

//hoc
import WithAuth from "./hoc/withAuth";

//pages
import Homepage from "./pages/Homepage";
import Registration from "./pages/Registration";
import Recovery from "./pages/Recovery";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

// layouts
import HomepageLayout from "./layouts/HomepageLayout";
import MainLayout from "./layouts/MainLayout";

const App = (props) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(checkUserSession());
	});

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
						<MainLayout>
							<Registration />
						</MainLayout>
					)}
				/>
				<Route
					exact
					path="/login"
					render={() => (
						<MainLayout>
							<Login />
						</MainLayout>
					)}
				/>
				<Route
					path="/recovery"
					render={() => (
						<MainLayout>
							<Recovery />
						</MainLayout>
					)}
				/>
				<Route
					path="/dashboard"
					render={() => (
						<WithAuth>
							<MainLayout>
								<Dashboard />
							</MainLayout>
						</WithAuth>
					)}
				/>
			</Switch>
		</div>
	);
};

export default App;
