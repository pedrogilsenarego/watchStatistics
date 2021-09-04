import { createTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import { red } from "@material-ui/core/colors";

const theme = createTheme({
	palette: {
		primary: {
			main: red[500]
		},
		secondary: {
			main: green[500]
		}
	}
});

export default theme;
