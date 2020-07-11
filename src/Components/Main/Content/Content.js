import React from "react";
import Grid from "@material-ui/core/Grid";
import { useMediaQuery } from "react-responsive";

const Content = () => {
  const isMobile = useMediaQuery({ query: "(min-device-width: 960px)" });

  return (
    <Grid style={{ marginLeft: !isMobile ? "0px" : "256px", color: "white" }}>
      COMING SOON...
    </Grid>
  );
};

export default Content;
