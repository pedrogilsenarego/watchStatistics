import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#36454f",
			light: "#736d83",
			dark: "#1e252b"
		},
		secondary: {
			main: "#FFA500"
		},
		text: {
			secondary: "#dcdae0"
		},
		type: "dark"
	}
});

export default theme;
