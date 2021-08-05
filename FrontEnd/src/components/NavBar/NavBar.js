import React from 'react';
import { Link } from 'react-router-dom';

import ToolBar from '@material-ui/core/ToolBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import {Container, Button, AppBar} from "@material-ui/core";


function Navbar() {
    

    return (
        
            <Container maxWidth="md">
            
                <AppBar color="secondary" elevation={0} style={{background: "transparent"}}>
                            <ToolBar>
                            
                                <IconButton>
                                    <MenuIcon/>
                                </IconButton>
                                
                                    <Button >
                                        Index
                                    </Button>                                                                                       
                                    <Button component={Link} to="/about">
                                        About
                                    </Button>
                                    <Button>
                                        Contact
                                    </Button>
                                
                               
                            </ToolBar>
                            
                        </AppBar>
                    </Container>
                
    )
}

export default Navbar