import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import UserAppBar from "./UserAppBar";
import Search from "./Search";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import RenderUsers from "./RenderUsers";
import SimpleBackdrop from "./BackDrop/LoadingFetch";
import InfiniteScroll from "react-infinite-scroll-component";

const useStyles = makeStyles(() => ({
  quadrapapers: {
    backgroundColor: "#282C34",
    flexDirection: "column",
    display: "flex",
  },

  titletext: {
    fontSize: "0.9em",
    fontWeight: "400",
    color: "#e6e5e8",
    alignText: "center",
  },

  ticketsdetailed: {
    fontSize: "0.7em",
    fontWeight: "400",
    color: "#e6e5e8",
    margin: "10px 10px ",
  },

  marginright: {
    padding: "0px",
    justifyContent: "center",
  },

  checkbox: {
    color: "#8A85FF",

    "&.MuiIconButton-colorInherit": {
      color: "#8A85FF",
    },

    "&.MuiCheckbox-colorSecondary.Mui-checked": {
      color: "#8A85FF",

      "&.MuiIconButton-root:hover": {
        color: "#8A85FF",
      },

      "&.MuiIconButton-colorSecondary:hover": {
        color: "#8A85FF",
      },
    },

    "&.MuiIconButton-colorSecondary": {
      color: "#8A85FF",
    },

    "&.hover": {
      color: "#8A85FF",
    },

    "&.MuiIconButton-root:hover": {
      backgroundColor: "rgba(138, 133, 255, 0.04)",
    },
  },

  ticketgrid: {
    padding: "15px 10px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
    alignItems: "center",
    "&:hover": {
      backgroundColor: "#363B47",
    },
  },
}));

const PaperList = (props) => {
  const { userData, moreData } = props.state;
  const [search, setSearch] = useState("");
  const [checked, setChecked] = React.useState(false);
  const [hasMore, setHasMore] = useState(true);

  const handleChecked = (event) => {
    setChecked(event.target.checked);
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  let filteredNames = userData.filter((username) => {
    return username.fullname.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  const classes = useStyles();

  const fetchMoreData = () => {
    setTimeout(() => {
      if (moreData < props.userFetch) {
        props.dispatch({ type: "moreData", value: moreData });
      } else {
        setHasMore(false);
      }
    }, 500);
  };

  return (
    <Grid item xs={12}>
      <Paper elevation={3} className={classes.quadrapapers}>
        <Grid container item={12}>
          <UserAppBar />

          <Search search={search} handleChange={handleChange} />

          <Grid
            item
            xs={12}
            container
            style={{
              padding: "10px",
              borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
              alignItems: "center",
            }}
          >
            <Grid item xs={1}>
              {" "}
              <Checkbox
                checked={checked}
                onChange={handleChecked}
                inputProps={{ "aria-label": "primary checkbox" }}
                className={classes.checkbox}
              />
            </Grid>
            <Grid item container xs={3} style={{ marginLeft: "30px" }}>
              {" "}
              <Typography className={classes.titletext}>User</Typography>
            </Grid>
            <Grid item container xs={2} style={{ justifyContent: "center" }}>
              {" "}
              <Typography className={classes.titletext}>Department</Typography>
            </Grid>
            <Grid item container xs={2} style={{ justifyContent: "center" }}>
              {" "}
              <Typography className={classes.titletext}>Company</Typography>
            </Grid>
            <Grid item container xs={2} style={{ justifyContent: "center" }}>
              {" "}
              <Typography className={classes.titletext}>Join Date</Typography>
            </Grid>{" "}
            <Grid item container xs={1} className={classes.marginright}>
              {" "}
              <Typography className={classes.titletext}>Actions</Typography>
            </Grid>{" "}
          </Grid>
          <Grid item xs={12}>
            <InfiniteScroll
              dataLength={moreData}
              next={fetchMoreData}
              hasMore={hasMore}
              loader={moreData < props.userFetch ? <SimpleBackdrop /> : null}
            >
              {filteredNames.slice(0, moreData).map((user) => {
                return <RenderUsers user={user} checked={checked} />;
              })}
            </InfiniteScroll>
          </Grid>
        </Grid>
        <Grid
          item={12}
          style={{
            justifyContent: "flex-end",
            display: "flex",
          }}
        ></Grid>
      </Paper>
    </Grid>
  );
};

export default PaperList;
