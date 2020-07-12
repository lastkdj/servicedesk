import React from "react";
import Grid from "@material-ui/core/Grid";
import { useMediaQuery } from "react-responsive";
import { Switch, Route } from "react-router-dom";
import Account from "../Account/Account";

const Content = () => {
  const isMobile = useMediaQuery({ query: "(min-device-width: 960px)" });

  return (
    <Grid style={{ marginLeft: !isMobile ? "0px" : "256px", color: "white" }}>
      <Switch>
        <Route exact path="/" component={Account} />
      </Switch>
    </Grid>
  );
};

export default Content;
