import React from "react";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/createStore";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./styles/MUITheme";

import App from "./App";
import { hydrate, render } from "react-dom";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
	hydrate(
		<Provider store={store}>
			<BrowserRouter>
				<PersistGate persistor={persistor}>
					<ThemeProvider theme={theme}>
						<App />
					</ThemeProvider>
				</PersistGate>
			</BrowserRouter>
		</Provider>,
		rootElement
	);
} else {
	render(
		<Provider store={store}>
			<BrowserRouter>
				<PersistGate persistor={persistor}>
					<ThemeProvider theme={theme}>
						<App />
					</ThemeProvider>
				</PersistGate>
			</BrowserRouter>
		</Provider>,
		rootElement
	);
}
