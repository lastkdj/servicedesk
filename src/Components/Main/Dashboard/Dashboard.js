import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import RecentTickets from "./DashboardComponents/RecentTickets";
import RecentUsers from "./DashboardComponents/RecentUsers";
import RecentProducts from "./DashboardComponents/RecentProducts";
import ActiveUsers from "./DashboardComponents/ActiveUsers";
import News from "./DashboardComponents/News";
import DataDonut from "./DashboardComponents/DataDonut";
import RecentTicketsDetailed from "./DashboardComponents/RecentTicketsDetailed";
import ShowDate from "./DashboardComponents/ShowDate";
import BarChart from "./DashboardComponents/BarChart";
import FirebaseApp from "../../../FireBase/FireBaseConfig";
import Assigments from "./DashboardComponents/Assignments";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  dashgrid: {
    marginLeft: "20px",
    marginRight: "20px",
    justifyContent: "center",

    [theme.breakpoints.up("sm")]: {
      marginLeft: "60px",
      marginRight: "60px",
    },
  },

  dashcontainer: {
    padding: "20px 10px 0px 30px",

    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {
      padding: "20px 10px 0px 30px",
    },
    [theme.breakpoints.up("xl")]: {
      padding: "40px 20px 0px 30px",
    },
  },

  dashstyle: {
    fontSize: "1.5em",
    fontWeight: "500",
  },

  dashgeneral: {
    padding: "10px",
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {
      padding: "10px",
    },
    [theme.breakpoints.up("xl")]: {
      padding: "20px",
    },
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item container xs={12} className={classes.dashgrid}>
        <Grid item xs={10} className={classes.dashcontainer}>
          <Typography className={classes.dashstyle}>DASHBOARD</Typography>
        </Grid>
        <ShowDate />
        <Grid
          container
          item
          xs={12}
          className={classes.dashgeneral}
          spacing={2}
        >
          <RecentTickets />
          <RecentUsers />
          <RecentProducts />
          <ActiveUsers />
          <News />
          <DataDonut />
          <BarChart />
          <Assigments />
          <RecentTicketsDetailed />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
