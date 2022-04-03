import * as Styled from "./styles";
import { Grid, Button } from "@mui/material";
import { BiImages } from "react-icons/bi";
import { useHistory } from "react-router-dom";

type Props = {
  table: string;
  setTable: (table: string) => void;
};

const MenuTables = ({ table, setTable }: Props) => {
  const history = useHistory();

  return (
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
              size="1em"
              style={{ cursor: "pointer" }}
            />
          </Grid>
        </Grid>
      </Styled.Grid>
    </Styled.Box>
  );
};

export default MenuTables;
