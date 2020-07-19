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
import { useGeolocation } from "react-use";
import Paper from "@material-ui/core/Paper";
import BarChart from "./DashboardComponents/BarChart";

import Assigments from "./DashboardComponents/Assignments";

const Dashboard = () => {
  const [content, setContent] = React.useState("");

  return (
    <Grid container>
      <Grid
        item
        container
        xs={12}
        style={{
          marginLeft: "60px",
          marginRight: "60px",
          justifyContent: "center",
        }}
      >
        <Grid item xs={10} style={{ padding: "40px 20px 0px 30px" }}>
          <Typography style={{ fontSize: "1.5em", fontWeight: "500" }}>
            DASHBOARD
          </Typography>
        </Grid>
        <ShowDate />
        <Grid container item xs={12} style={{ padding: "20px" }} spacing={2}>
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
