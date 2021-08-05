import React from 'react';
import { Link } from 'react-router-dom';



import ToolBar from '@material-ui/core/ToolBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import {Container, Button, Typography, AppBar} from "@material-ui/core";






function Navbar() {
    

    return (
        
            <Container maxWidth="md">
            
                <AppBar color="secondary">
                            <ToolBar>
                            
                                <IconButton>
                                    <MenuIcon/>
                                </IconButton>
                                
                                <Typography variant="h6">
                                    Teste
                                </Typography>
                                <Button component={Link} to="/about">
                                    About
                                </Button>
                            </ToolBar>
                        </AppBar>
                    </Container>
                
    )
}

export default Navbar