import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
	palette: {
		background: {
			default: "#000000"
		},
		primary: {
			contrastText: "#FFFFFF",
			main: "#36454f",
			light: "#736d83",
			dark: "#1e252b"
		},
		secondary: {
			main: "#000000"
		},
		text: {
			primary: "#ffffff",
			faded: "#ffffffBF",
			faded2: "#ffffff66",
			faded3: "#ffffff33"
		},
		type: "dark"
	}
});

const lightTheme = createTheme({
	palette: {
		background: {
			default: "#ffffff"
		},
		primary: {
			main: "#36454f",
			light: "#B3B1B1",
			dark: "#1e252b"
		},
		secondary: {
			main: "#FFA500"
		},
		text: {
			primary: "#000000",
			faded: "#000000BF",
			faded2: "#00000066"
		},
		type: "light"
	}
});

export { darkTheme, lightTheme };
