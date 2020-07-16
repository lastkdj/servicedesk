import React from "react";
import Grid from "@material-ui/core/Grid";

const AbsoluteWrapper = (props) => {
  return <Grid style={{ position: "absolute" }}>{props.children}</Grid>;
};

export default AbsoluteWrapper;
