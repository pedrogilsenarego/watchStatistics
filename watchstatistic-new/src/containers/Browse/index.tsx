import { useState } from "react";
import { Container } from "@mui/material";
import MenuTables from "./MenuTables";
import WatchesTable from "./WatchesTable";
import UsersTable from "./UsersTable";

const Browse = () => {
  const [table, setTable] = useState("watches");

  const configMenuTables = {
    table,
    setTable,
  };
  return (
    <Container maxWidth="xl">
      <MenuTables {...configMenuTables} />
      {table === "watches" && <WatchesTable />}
      {table === "users" && <UsersTable />}
    </Container>
  );
};

export default Browse;
