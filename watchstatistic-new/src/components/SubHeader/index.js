import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	text: { fontSize: 25, color: "#FFFFFF" }
}));

const mapState = (state) => ({
	currentUser: state.user.currentUser
});

const SubHeader = (props) => {
	const { currentUser } = useSelector(mapState);

	const classes = useStyles();

	const { displayName, userVotes } = currentUser;
	const userNumberVotes = userVotes.length - 1;

	return (
		<subheader>
			<Box px={{ xs: 10 }} py={{ xs: 3 }} bgcolor="primary.light">
				{currentUser && (
					<Grid container>
						<Grid item xs={12} md={6}>
							<Typography className={classes.text}>
								Hello, {displayName}
							</Typography>
						</Grid>
						<Grid item xs={12} md={6} align={"right"}>
							{(userNumberVotes > 1 || userNumberVotes === 0) && (
								<Typography className={classes.text}>
									You have voted on {userNumberVotes} watches
								</Typography>
							)}
							{userNumberVotes === 1 && (
								<Typography className={classes.text}>
									You have voted on {userNumberVotes} watch
								</Typography>
							)}
						</Grid>
					</Grid>
				)}
			</Box>
			<Box
				px={{ xs: 10 }}
				py={{ xs: 3 }}
				bgcolor={"primary.main"}
				color={"#dcdae0"}
				textAlign="center"
			></Box>
		</subheader>
	);
};

export default SubHeader;
