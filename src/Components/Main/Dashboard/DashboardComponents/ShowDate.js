import React from "react";
import Button from "@material-ui/core/Button";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  papermenu: {
    backgroundColor: "#282C34",
    color: "white",
  },
}));

const ShowDate = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid
      item
      container
      xs={2}
      style={{ padding: "40px 20px 0px 30px", justifyContent: "flex-end" }}
    >
      <Button
        onClick={handleClick}
        style={{
          color: "#fff",
        }}
      >
        <Typography
          style={{
            fontSize: "1em",
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          Last Month
        </Typography>
        <CalendarTodayIcon
          style={{
            fontSize: "1em",
            width: "1.5em",
            height: "1.5em",
            marginLeft: "10px",
          }}
        />
      </Button>
      <Grid>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
          classes={{ paper: classes.papermenu }}
        >
          <MenuItem>Yesterday</MenuItem>
          <MenuItem>Last Month</MenuItem>
          <MenuItem>Last year</MenuItem>
        </Menu>
      </Grid>
    </Grid>
  );
};

export default ShowDate;
