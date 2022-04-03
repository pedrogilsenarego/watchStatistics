import { useState } from "react";
import { Container } from "@mui/material";
import * as Styled from "./styles";
import { Grid, Button } from "@mui/material";
import { BiImages } from "react-icons/bi";
import { useHistory } from "react-router-dom";

const Browse = () => {
  const history = useHistory();
  const [table, setTable] = useState("watches");
  return (
    <Container maxWidth="xl">
      <Styled.Box>
        <Styled.Grid container>
          <Grid item container xs={6} alignItems="center">
            <Button
              style={{ color: table === "watches" ? "orange" : "white" }}
              onClick={(e) => {
                setTable("watches");
              }}
              disableRipple
            >
              Watches
            </Button>
            <Button
              style={{ color: table === "users" ? "orange" : "white" }}
              disableRipple
              onClick={(e) => {
                setTable("users");
              }}
            >
              Users
            </Button>
          </Grid>
          <Grid
            item
            container
            xs={6}
            justifyContent="flex-end"
            alignItems="center"
            spacing={2}
          >
            <Grid>
              <BiImages
                onClick={() => {
                  history.push("/browse/tiles");
                }}
                size="2em"
                style={{ cursor: "pointer" }}
              />
            </Grid>
          </Grid>
        </Styled.Grid>
      </Styled.Box>
    </Container>
  );
};

export default Browse;
