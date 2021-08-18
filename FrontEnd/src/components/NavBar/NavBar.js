import React from 'react';
import { Link } from 'react-router-dom';

import ToolBar from '@material-ui/core/ToolBar'

import {Container, Button, AppBar} from "@material-ui/core";


function Navbar() {


    return (

            <Container maxWidth="md">

                <AppBar color="secondary" elevation={0} style={{background: "transparent"}}>
                            <ToolBar>
                                    <Button component={Link} to="/">
                                        Home
                                    </Button>
                                    <Button component={Link} to="/index">
                                        Index
                                    </Button>
                                    <Button component={Link} to="/about">
                                        About
                                    </Button>
                                    <Button component={Link} to="/contacts">
                                        Contacts
                                    </Button>
                                    <Button component={Link} to="/signup">
                                        Signup
                                    </Button>


                            </ToolBar>

                        </AppBar>
                    </Container>

    )
}

export default Navbar