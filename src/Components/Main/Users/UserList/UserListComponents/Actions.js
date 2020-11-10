import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import EditIcon from "@material-ui/icons/Edit";
import BlockIcon from "@material-ui/icons/Block";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import FirebaseApp from "../../../../../FireBase/FireBaseConfig";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import { useUserList } from "../../../../Context/UserListContext";
import CircularProgress from "@material-ui/core/CircularProgress";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { useMediaQuery } from "react-responsive";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(14),
    height: theme.spacing(14),
  },

  root: {
    color: "white",
    backgroundColor: "rgb(178, 4, 83)",
    fontSize: "0.5em",
    padding: "10px",
    borderRadius: "5px",
    "&:hover": {
      "@media (hover: none)": {
        backgroundColor: "transparent",
      },
    },
  },
  buttonProgress: {
    color: "#8a85ff",
    position: "absolute",
  },
}));

const Actions = (props) => {
  const [loading, setLoading] = useState(false);
  const { state, dispatch } = useUserList();
  const { editUser } = state;
  const classes = useStyles();

  const isPhone = useMediaQuery({ query: "(max-device-width: 375px)" });

  const handleClick = () => {
    dispatch({ type: "selected", value: props.user.uid });
    dispatch({ type: "edit", value: editUser });
  };

  const disableUser = () => {
    if (props.user.disabled === "false") {
      setLoading(true);
      const callDisable = FirebaseApp.functions().httpsCallable("callDisable");
      callDisable({ uid: props.user.uid }).then((result) => {
        setLoading(false);

        FirebaseApp.firestore()
          .collection("users")
          .doc(props.user.uid)
          .update({
            disabled: "true",
          })
          .then(() => {
            console.log("done, disabled");
          });
      });
    } else {
      setLoading(true);
      const callEnable = FirebaseApp.functions().httpsCallable("callEnable");
      callEnable({ uid: props.user.uid }).then((result) => {
        setLoading(false);
        FirebaseApp.firestore()
          .collection("users")
          .doc(props.user.uid)
          .update({
            disabled: "false",
          })
          .then(() => {
            console.log("done, enabled");
          });
      });
    }
  };

  return (
    <React.Fragment>
      <Grid item>
        <Tooltip title="View">
          <Button
            variant="contained"
            type="submit"
            color="primary"
            style={{ backgroundColor: "#11A1CB" }}
            // onClick={}
          >
            <SearchIcon style={isPhone ? { fontSize: "15px" } : null} />
          </Button>
        </Tooltip>
      </Grid>{" "}
      <Grid item>
        <Tooltip title="Edit">
          <Button
            variant="contained"
            type="submit"
            color="primary"
            style={{
              backgroundColor: "rgb(138, 133, 255)",
              "&:hover": {
                backgroundColor: "#6461B9",
              },
            }}
            onClick={handleClick}
          >
            <EditIcon style={isPhone ? { fontSize: "15px" } : null} />
          </Button>
        </Tooltip>
      </Grid>
      <Grid item>
        <span title={props.user.disabled === "false" ? "Disable" : null}>
          <Button
            variant="contained"
            type="submit"
            color="primary"
            style={
              ({ marginBottom: "0px" },
              props.user.disabled === "false"
                ? { backgroundColor: "#B20453" }
                : { backgroundColor: "#28CB00" })
            }
            onClick={disableUser}
            disabled={
              props.user.uid !== FirebaseApp.auth().currentUser.uid
                ? loading
                : true
            }
          >
            {loading ? (
              <CircularProgress
                thickness={5}
                size={18}
                className={classes.buttonProgress}
              />
            ) : null}
            {props.user.disabled === "false" ? (
              <BlockIcon
                style={isPhone ? { fontSize: "15px", minWidth: "0" } : null}
              />
            ) : (
              <CheckCircleIcon
                style={isPhone ? { fontSize: "15px", minWidth: "0" } : null}
              />
            )}
          </Button>
        </span>
      </Grid>
    </React.Fragment>
  );
};

export default Actions;
