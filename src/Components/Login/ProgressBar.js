import React, { useState, useEffect } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  bar20: {
    backgroundColor: "red",
  },

  bar40: {
    backgroundColor: "#FF9E00",
  },

  bar60: {
    backgroundColor: "#F0FF00",
  },

  bar80: {
    backgroundColor: "#00FFD1",
  },

  bar100: {
    backgroundColor: "#2AFF00",
  },
});

const ProgressBar = (props) => {
  const [progress, setProgress] = useState(0);
  const [progressColor, setProgressColor] = useState({ bar: "red" });

  useEffect(() => {
    var strength = 0;
    if (props.password.match(/[a-z]+/)) {
      strength += 1;
    }

    if (props.password.match(/[A-Z]+/)) {
      strength += 1;
    }

    if (props.password.match(/[0-9]+/)) {
      strength += 1;
    }

    if (props.password.match(/[!@$%^&*()?]+/)) {
      strength += 1;
    }

    if (props.password.length >= 6) {
      strength += 1;
    }

    if (props.password.length === 0) {
      strength = 0;
    }

    switch (strength) {
      case 0:
        setProgress(0);
        break;
      case 1:
        setProgress(20);
        setProgressColor({ bar: classes.bar20 });
        break;
      case 2:
        setProgress(40);
        setProgressColor({ bar: classes.bar40 });
        break;
      case 3:
        setProgress(60);
        setProgressColor({ bar: classes.bar60 });
        break;
      case 4:
        setProgress(80);
        setProgressColor({ bar: classes.bar80 });
        break;
      case 5:
        setProgress(100);
        setProgressColor({ bar: classes.bar100 });
        break;

      default:
        break;
    }
  }, [props.password]);

  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <LinearProgress
        variant="determinate"
        value={progress}
        classes={progressColor}
      />
    </Grid>
  );
};

export default ProgressBar;
