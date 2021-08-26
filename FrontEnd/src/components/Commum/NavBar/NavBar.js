import React from "react";
import { NavLink } from "react-router-dom";

import ToolBar from "@material-ui/core/ToolBar";

import { Container, Button, AppBar } from "@material-ui/core";

function Navbar() {
  const activeStyle = { color: "#8E8D8D" };
  return (
    <Container maxWidth="md">
      <AppBar
        color="secondary"
        elevation={0}
        style={{ background: "transparent" }}
      >
        <ToolBar>
          <Button activeStyle={activeStyle} component={NavLink} to="/" exact>
            Home
          </Button>
          <Button activeStyle={activeStyle} component={NavLink} to="/index">
            Index
          </Button>
          <Button activeStyle={activeStyle} component={NavLink} to="/about">
            About
          </Button>
          <Button activeStyle={activeStyle} component={NavLink} to="/contacts">
            Contacts
          </Button>
          <Button activeStyle={activeStyle} component={NavLink} to="/signup">
            Signup
          </Button>
        </ToolBar>
      </AppBar>
    </Container>
  );
}

export default Navbar;
