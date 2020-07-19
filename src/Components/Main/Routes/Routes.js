import React from "react";
import Grid from "@material-ui/core/Grid";
import { useMediaQuery } from "react-responsive";
import { Switch, Route } from "react-router-dom";
import Account from "../Account/Account";
import Dashboard from "../Dashboard/Dashboard";
import UserList from "../Users/UserList/UserList";

const Routes = () => {
  const isMobile = useMediaQuery({ query: "(min-device-width: 961px)" });

  return (
    <Grid style={{ marginLeft: !isMobile ? "0px" : "256px", color: "white" }}>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/userlist" component={UserList} />
      </Switch>
    </Grid>
  );
};

export default Routes;
