import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import "./default.scss";
import { checkUserSession } from "./redux/User/user.actions";

//hoc
import WithAuth from "./hoc/withAuth";
import WithAdminAuth from "./hoc/withAdminAuth";

//pages
import Search from "./pages/Search";

import Dashboard from "./pages/Dashboard";
import MyCollection from "./pages/MyCollection";
import Admin from "./pages/Admin";
import ProductDetails from "./pages/ProductDetails";
import ProductDetailsPreview from "./pages/ProductDetailsPreview";
import FAQ from "./pages/FAQ";
import Watchstatistics from "./pages/Watchstatistics";
import AddWatch from "./pages/Watchstatistics/AddWatch";
import WatchBoxes from "./pages/WatchBoxes";
import CompareWatches from "./pages/CompareWatches";
import WatchLaboratory from "./pages/WatchLaboratory";
import WatchLaboratory2 from "./components/WatchLab2";
import Market from "./pages/Market";
import Messages from "./pages/Messages";
import Stats from "./pages/Stats";

import Order from "./pages/Order";

// layouts
import HomepageLayout from "./layouts/HomepageLayout";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import DashBoardLayout from "./layouts/DashboardLayout";

import { ThemeProvider } from "@material-ui/styles";
import { darkTheme, lightTheme } from "./styles/MUITheme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useSelector } from "react-redux";
import HomePage from "./pages/Homepage";

const mapState = (state) => ({
	currentUser: state.user.currentUser
});

const App = (props) => {
	const dispatch = useDispatch();
	const { currentUser } = useSelector(mapState);

	useEffect(
		() => {
			dispatch(checkUserSession());
		},
		// eslint-disable-next-line
		[]
	);

	return (
		<ThemeProvider
			theme={
				currentUser ? (!currentUser.theme ? darkTheme : lightTheme) : darkTheme
			}
		>
			<CssBaseline />
			<div className="App">
				<Switch>
					<Route
						exact
						path="/"
						render={() =>
							currentUser ? (
								<HomepageLayout>
									<HomePage />
								</HomepageLayout>
							) : (
								<MainLayout>
									<Watchstatistics />
								</MainLayout>
							)
						}
					/>

					<Route
						exact
						path="/watchstatistics/comparewatches"
						render={() => (
							<MainLayout>
								<CompareWatches />
							</MainLayout>
						)}
					/>
					<Route
						exact
						path="/watchstatistics/stats"
						render={() => (
							<MainLayout>
								<Stats />
							</MainLayout>
						)}
					/>
					<Route
						exact
						path="/watchstatistics/watchlaboratory"
						render={() => (
							<WithAuth>
								<MainLayout>
									<WatchLaboratory2 />
								</MainLayout>
							</WithAuth>
						)}
					/>
					<Route
						exact
						path="/messages"
						render={() => (
							<WithAuth>
								<MainLayout>
									<Messages />
								</MainLayout>
							</WithAuth>
						)}
					/>
					<Route
						exact
						path="/watchstatistics/watchlaboratory2"
						render={() => (
							<WithAuth>
								<MainLayout>
									<WatchLaboratory />
								</MainLayout>
							</WithAuth>
						)}
					/>
					<Route
						exact
						path="/watchstatistics/addwatch"
						render={() => (
							<WithAuth>
								<MainLayout>
									<AddWatch />
								</MainLayout>
							</WithAuth>
						)}
					/>
					<Route
						exact
						path="/watchstatistics/market"
						render={() => (
							<WithAuth>
								<MainLayout>
									<Market />
								</MainLayout>
							</WithAuth>
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
						path="/product/preview"
						render={() => (
							<WithAuth>
								<MainLayout>
									<ProductDetailsPreview />
								</MainLayout>
							</WithAuth>
						)}
					/>
					<Route
						path="/about/FAQ"
						render={() => (
							<MainLayout>
								<FAQ />
							</MainLayout>
						)}
					/>
					<Route
						path="/watchboxes"
						render={() => (
							<MainLayout>
								<WatchBoxes />
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
					<Route
						path="/mycollection"
						render={() => (
							<WithAuth>
								<MainLayout>
									<MyCollection />
								</MainLayout>
							</WithAuth>
						)}
					/>
					<Route
						path="/order/:orderID"
						render={() => (
							<WithAuth>
								<DashBoardLayout>
									<Order />
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
		</ThemeProvider>
	);
};

export default App;
