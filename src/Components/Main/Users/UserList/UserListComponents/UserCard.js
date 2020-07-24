import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor: "#282C34",
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.user.photoUrl}
          title="Contemplative Reptile"
        />
        <CardContent style={{ width: "300px" }}>
          <Typography
            gutterBottom
            style={{
              fontSize: "1.4em",
              fontWeight: "700",
              color: "#e6e5e8",
            }}
          >
            {props.user.fullname}
          </Typography>
          <Typography
            variant="body2"
            component="p"
            style={{ color: "#D3D3D3" }}
          >
            {props.user.job}
          </Typography>
          <Typography
            variant="body2"
            style={{ color: "#D3D3D3" }}
            component="p"
            gutterBottom
          >
            {props.user.department}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ color: "#D3D3D3" }}
          >
            Here you can add user info, or whaever you want to fucking post in
            your profile
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions style={{ backgroundColor: "#8a85ff" }}>
        <Grid container style={{ justifyContent: "flex-end" }}>
          <Button size="small" style={{ color: "white" }}>
            Contact
          </Button>
          <Button size="small" style={{ color: "white" }}>
            Learn More
          </Button>
        </Grid>
      </CardActions>
    </Card>
  );
}
