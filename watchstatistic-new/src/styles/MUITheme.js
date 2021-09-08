import { createTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";

const theme = createTheme({
	palette: {
		primary: {
			main: green[500]
		},
		secondary: {
			main: green[500]
		}
		/* background: {
			default: "#3ec9f3"
		} */
	}
});

export default theme;
