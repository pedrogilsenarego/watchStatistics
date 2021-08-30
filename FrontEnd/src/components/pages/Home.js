import React from "react";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LoginFirebase from "../../services/Firebase/LoginFirebase";

const useStyles = makeStyles((theme) => ({
	formWrapper: {
		marginTop: theme.spacing(10),
		marginBottom: theme.spacing(8)
	}
}));

const Home = () => {
	const classes = useStyles();

	return (
		<Grid item xs={12}>
			<Container maxWidth="md">
				<div className={classes.formWrapper}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<LoginFirebase />
						</Grid>
					</Grid>
				</div>
			</Container>
		</Grid>
	);
};

export default Home;
