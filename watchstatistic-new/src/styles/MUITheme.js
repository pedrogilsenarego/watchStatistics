import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#48415a",
			light: "#736d83",
			dark: "#282432"
		},
		secondary: {
			main: "#5c6449"
		},
		text: {
			secondary: "#dcdae0"
		}
	}
});

export default theme;
