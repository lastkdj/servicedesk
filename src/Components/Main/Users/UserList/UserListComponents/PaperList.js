import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import UserAppBar from "./UserAppBar";
import Search from "./Search";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import RenderUsers from "./RenderUsers";
import SimpleBackdrop from "./BackDrop/LoadingFetch";
import InfiniteScroll from "react-infinite-scroll-component";
import { Button } from "@material-ui/core";
import Fade from "@material-ui/core/Fade";
import { useUserList } from "../../../../Context/UserListContext";
import AreYouSure from "./AreYouSure";

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

  button: {
    backgroundColor: "#8A85FF",
    color: "white",

    "&:hover": {
      backgroundColor: "#5A55DA",
    },
  },
}));

const PaperList = () => {
  const { state, dispatch } = useUserList();
  const { userData, moreData, userFetch, error, success } = state;
  const [search, setSearch] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const [DelEdit, setDelEdit] = useState(false);
  const [checkRef, setcheckRef] = useState(0);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  let filteredNames = userData.filter((username) => {
    return username.fullname.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  const classes = useStyles();

  const fetchMoreData = () => {
    setTimeout(() => {
      if (moreData < userFetch) {
        dispatch({ type: "moreData", value: moreData });
      } else {
        setHasMore(false);
      }
    }, 500);
  };

  const deletedUser = () => {
    dispatch({ type: "deleted", value: true });
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleSuccess = () => {
    dispatch({ type: "success", value: false });
  };

  const handleError = () => {
    dispatch({ type: "error", value: false });
  };

  return (
    <Grid item xs={12}>
      <Paper elevation={3} className={classes.quadrapapers}>
        <Grid container item={12}>
          <UserAppBar />
          <AreYouSure />
          <Search
            search={search}
            handleChange={handleChange}
            userData={userData}
            dispatch={dispatch}
          />

          {DelEdit ? (
            <Fade in={true}>
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
                <Grid item style={{ margin: "10px" }}>
                  <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    className={classes.button}
                    style={{ marginBottom: "0px" }}
                    onClick={deletedUser}
                  >
                    Delete
                  </Button>
                </Grid>
                <Grid item style={{ margin: "10px" }}>
                  <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    className={classes.button}
                    style={{ marginBottom: "0px" }}
                  >
                    Edit
                  </Button>
                </Grid>
              </Grid>
            </Fade>
          ) : (
            <Grid
              item
              xs={12}
              container
              style={{
                padding: "10px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
                alignItems: "center",
                height: "77px",
              }}
            >
              <Grid
                item
                container
                xs={3}
                style={{
                  marginLeft: "30px",
                  height: "36px",
                  marginBottom: "10px",
                }}
              >
                {" "}
                <Typography className={classes.titletext}>User</Typography>
              </Grid>
              <Grid
                item
                container
                xs={2}
                style={{
                  justifyContent: "center",
                  height: "36px",
                  marginBottom: "10px",
                }}
              >
                {" "}
                <Typography className={classes.titletext}>
                  Department
                </Typography>
              </Grid>
              <Grid
                item
                container
                xs={2}
                style={{
                  justifyContent: "center",
                  height: "36px",
                  marginBottom: "10px",
                }}
              >
                {" "}
                <Typography className={classes.titletext}>Company</Typography>
              </Grid>
              <Grid
                item
                container
                xs={2}
                style={{
                  justifyContent: "center",
                  height: "36px",
                  marginBottom: "10px",
                }}
              >
                {" "}
                <Typography className={classes.titletext}>Join Date</Typography>
              </Grid>{" "}
              <Grid item container xs={2} className={classes.marginright}>
                {" "}
                <Typography
                  className={classes.titletext}
                  style={{ height: "36px", marginBottom: "10px" }}
                >
                  Actions
                </Typography>
              </Grid>{" "}
            </Grid>
          )}
          <Grid item xs={12}>
            <InfiniteScroll
              dataLength={moreData}
              next={fetchMoreData}
              hasMore={hasMore}
              loader={moreData < userFetch ? <SimpleBackdrop /> : null}
            >
              {filteredNames.slice(0, moreData).map((user) => {
                return (
                  <RenderUsers
                    user={user}
                    setDelEdit={setDelEdit}
                    checkRef={checkRef}
                    setcheckRef={setcheckRef}
                  />
                );
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
      <Snackbar open={success} autoHideDuration={4000} onClose={handleSuccess}>
        <Alert severity="success">The User has been successfully Removed</Alert>
      </Snackbar>
      <Snackbar open={error} autoHideDuration={4000} onClose={handleError}>
        <Alert severity="error">You can't remove yourself</Alert>
      </Snackbar>
    </Grid>
  );
};

export default PaperList;
