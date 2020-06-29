import React, { useState, useEffect } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  bar30: {
    backgroundColor: "red",
  },

  bar60: {
    backgroundColor: "#FFE400",
  },

  bar100: {
    backgroundColor: "#0CFF00",
  },
});

const ProgressBar = (props) => {
  const [progress, setProgress] = useState(0);
  const [progressColor, setProgressColor] = useState({ bar: "red" });

  useEffect(() => {
    if (props.password.length >= 1 && props.password.length <= 6) {
      setProgress(30);
      setProgressColor({ bar: classes.bar30 });
    } else if (props.password.length === 0) {
      setProgress(0);
    } else if (props.password.length > 6 && props.password.length < 10) {
      setProgress(60);
      setProgressColor({ bar: classes.bar60 });
    } else {
      setProgress(100);
      setProgressColor({ bar: classes.bar100 });
    }
  }, [props.password]);

  const classes = useStyles();
  return (
    <Grid item xs={10}>
      <LinearProgress
        variant="determinate"
        value={progress}
        classes={progressColor}
      />
    </Grid>
  );
};

export default ProgressBar;
