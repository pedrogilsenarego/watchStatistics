import React from "react";
import { Box, Container, Grid, Link } from "@material-ui/core";

const Footer = (props) => {
	return (
		<footer>
			<Box
				px={{ xs: 3, sm: 10 }}
				py={{ xs: 5, sm: 10 }}
				bgcolor={"primary.main"}
				color={"text.secondary"}
				textAlign="center"
			>
				<Container maxWidth="lg">
					<Grid container spacing={5}>
						<Grid item xs={12} sm={6}>
							<Box fontWeight={600}>V1.1.5</Box>
							<Box>
								<Link href="/changelog" color="inherit">
									ChangeLog
								</Link>
							</Box>
							<Box>
								<Link href="/resources" color="inherit">
									Resources
								</Link>
							</Box>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Box fontWeight={600}>About</Box>
							<Box>
								<Link color="inherit">Who we are</Link>
							</Box>
							<Box>
								<Link color="inherit">Other Projects</Link>
							</Box>
						</Grid>
					</Grid>
					<Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 10 }}>
						WatchStatistics by Eloy & Sena &reg; {new Date().getFullYear()}
					</Box>
				</Container>
			</Box>
		</footer>
	);
};

export default Footer;
