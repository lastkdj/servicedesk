import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import useStyles from "./LoginStyles";

function CopyRight() {
  const classes = useStyles();

  return (
    <Typography variant="body2" className={classes.textcolor} align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        ServiceDesk
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default CopyRight;
