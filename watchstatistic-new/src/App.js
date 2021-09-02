import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import "./default.scss";
import { checkUserSession } from "./redux/User/user.actions";

// components
import AdminToolbar from "./components/AdminToolbar";

//hoc
import WithAuth from "./hoc/withAuth";
import WithAdminAuth from "./hoc/withAdminAuth";

//pages
import Homepage from "./pages/Homepage";
import Search from "./pages/Search";
import Registration from "./pages/Registration";
import Recovery from "./pages/Recovery";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import ProductDetails from "./pages/ProductDetails";

// layouts
import HomepageLayout from "./layouts/HomepageLayout";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import DashBoardLayout from "./layouts/DashboardLayout";

const App = (props) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(checkUserSession());
	});

	return (
		<div className="App">
			<AdminToolbar />
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
					path="/search"
					render={() => (
						<MainLayout>
							<Search />
						</MainLayout>
					)}
				/>
				<Route
					path="/search/:filterType"
					render={() => (
						<MainLayout>
							<Search />
						</MainLayout>
					)}
				/>
				<Route
					path="/product/:productID"
					render={() => (
						<MainLayout>
							<ProductDetails />
						</MainLayout>
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
							<DashBoardLayout>
								<Dashboard />
							</DashBoardLayout>
						</WithAuth>
					)}
				/>
				<Route
					path="/admin"
					render={() => (
						<WithAdminAuth>
							<AdminLayout>
								<Admin />
							</AdminLayout>
						</WithAdminAuth>
					)}
				/>
			</Switch>
		</div>
	);
};

export default App;
