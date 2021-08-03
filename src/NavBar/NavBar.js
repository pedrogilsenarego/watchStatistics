import React from 'react';

import Button from "@material-ui/core/Button"
import  Typography  from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const Navbar = () => {
    return (
        <AppBar color="secondary">
                    <ToolBar>
                        <IconButton>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6">
                            Welcome to the Navigation Bar
                        </Typography>
                        <Button>
                            Login
                        </Button>
                    </ToolBar>
                </AppBar>
    )
}

export default Navbar