import React from "react";
import { Route, Switch } from "react-router-dom";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import About from "./components/pages/About";
import Contacts from "./components/pages/Contacts";
import IndexPage from "./components/pages/Index";
import Home from "./components/pages/Home";
import Signup from "./components/pages/Signup";
import { Grid } from "@material-ui/core";

import Navbar from "./components/Commum/NavBar/NavBar";
import PageNotFound from "./components/PageNotFound";

//The theme is defined here for now

//import orange from '@material-ui/core/colors/orange';
//import green from '@material-ui/core/colors/green';

const theme = createTheme({
	typography: {
		h2: {
			fontSize: 18
		}
	},
	palette: {
		background: {
			default: "#FCFAF9"
		},

		primary: {
			main: "#FCFAF9"
		},
		secondary: {
			main: "#373332"
		}
	}
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Grid>
				<Grid item xs={12}>
					<Navbar />
				</Grid>
			</Grid>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/about" component={About} />
				<Route path="/contacts" component={Contacts} />
				<Route path="/signup" component={Signup} />
				<Route path="/index" component={IndexPage} />
				<Route component={PageNotFound} />
			</Switch>
		</ThemeProvider>
	);
}

export default App;
