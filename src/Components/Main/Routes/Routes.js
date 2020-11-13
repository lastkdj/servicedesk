import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import { useMediaQuery } from "react-responsive";
import { Switch, Route } from "react-router-dom";
import Account from "../Account/Account";
import Dashboard from "../Dashboard/Dashboard";
import UserList from "../Users/UserList/UserList";
import { AuthContext } from "../../Context/AuthContext";
import NewDialog from "../LandingUser/NewDialog";

const Routes = () => {
  const { firstLog } = useContext(AuthContext);
  const isMobile = useMediaQuery({ query: "(min-device-width: 961px)" });

  return (
    <Grid style={{ marginLeft: !isMobile ? "0px" : "256px", color: "white" }}>
      <Switch>
        {/* {firstLog ? <Route exact path="/" component={NewDialog} /> : null} */}
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/userlist" component={UserList} />
      </Switch>
    </Grid>
  );
};

export default Routes;
