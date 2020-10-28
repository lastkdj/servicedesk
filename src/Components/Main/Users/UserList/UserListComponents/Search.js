import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery } from "react-responsive";
import FirebaseApp from "../../../../../FireBase/FireBaseConfig";

const alpha = "Alphabetical";
const newest = "Newest Users";
const oldest = "Oldest Users";
const active = "Active Users";
const disabled = "Disabled Users";
const All = "All";

const useStyles = makeStyles((theme) => ({
  rootcompany: {
    width: "100%",
    "& label.Mui-focused": {
      color: "#B6B3FF",
    },
    "& .MuiOutlinedInput-root": {
      color: "white",
      "& fieldset": {
        borderColor: "rgba(255, 255, 255, 0.23)",
        borderWidth: "1px",
      },
      "&:hover fieldset": {
        borderColor: "#B6B3FF",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#8A85FF",
      },
    },

    "&.MuiSelect-icon": {
      color: "white",
    },
    "&.MuiSelect-iconOutlined": {
      color: "white",
    },
  },

  backcompany: {
    backgroundColor: "#282C34",
    color: "white",
  },

  popupcompany: {
    color: "white",
  },

  root: {
    width: "100%",

    "& label.Mui-focused": {
      color: "#B6B3FF",
    },
    "& .MuiOutlinedInput-root": {
      color: "white",
      "& fieldset": {
        borderColor: "rgba(255, 255, 255, 0.23)",
        borderWidth: "1px",
      },

      "&.MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline": {
        borderColor: "rgba(255, 255, 255, 0.23)",
        borderWidth: "1px",
        color: "white",
      },

      "&:hover fieldset": {
        borderColor: "#B6B3FF",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#8A85FF",
      },

      "&.MuiSelect-icon": {
        color: "white",
      },
    },
  },

  label: {
    color: "#e6e5e8",

    "&.MuiInputLabel-outlined.MuiInputLabel-shrink": {
      color: "#e6e5e8",
    },
  },
}));

const Search = (props) => {
  const classes = useStyles();
  const [sort, setSort] = useState("");
  const [opensort, setOpenSort] = useState(false);
  const [active, setActive] = useState("");
  const [openactive, setOpenActive] = useState(false);
  
  

  const isPhone = useMediaQuery({ query: "(max-device-width: 375px)" });

  const handleSort = (event) => {
    setSort(event.target.value);
  };

  const handleActive = (event) => {
    setActive(event.target.value);
  };

  const sortAplha = () => {
    const newArray = props.userData.sort((a, b) => {
      return a.firstName > b.firstName ? 1 : -1;
    });

    props.dispatch({ type: "fetch", value: newArray });
  };

  const sortOld = () => {
    const newArray = props.userData.sort((a, b) => {
      return a.usercreation_timeStamp > b.usercreation_timeStamp ? 1 : -1;
    });

    props.dispatch({ type: "fetch", value: newArray });
  };

  const sortNew = () => {
    const newArray = props.userData.sort((a, b) => {
      return b.usercreation_timeStamp > a.usercreation_timeStamp ? 1 : -1;
    });

    props.dispatch({ type: "fetch", value: newArray });
  };

  const sortAll = () => {
    props.dispatch({ type: "fetch", value: props.OriginuserData });
  }

  const sortActive = () => {
    FirebaseApp.firestore()
    .collection("users")
    .where("disabled", "==", "false").get().then(function(querySnapshot) {
      const dataArray = [];
      querySnapshot.forEach(function(doc) {
        console.log(doc.data())
        const data = doc.data()
        dataArray.push(data)
        props.dispatch({ type: "fetch", value: dataArray });
      })
    })
     
  };

  const sortDisabled = () => {
    FirebaseApp.firestore()
    .collection("users")
    .where("disabled", "==", "true").get().then(function(querySnapshot) {
      const dataArray = [];
      querySnapshot.forEach(function(doc) {
        console.log(doc.data())
        const data = doc.data()
        dataArray.push(data)
        props.dispatch({ type: "fetch", value: dataArray });
      })
    })
  };

  return (
    <Grid container item xs={12} style={{ justifyContent: "space-between" }}>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        lg={4}
        xl={4}
        style={isPhone ? { padding: "13px" } : { padding: "20px" }}
      >
        <TextField
          value={props.search}
          type="text"
          label="Search"
          variant="outlined"
          className={classes.root}
          onChange={props.handleChange}
          labelwidth={70}
          placeholder="Search Employee"
          InputLabelProps={{
            classes: {
              root: classes.label,
            },
            shrink: true,
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment disablePointerEvents={true} position="start">
                <IconButton style={{ padding: "0px", color: "#adb0bb" }}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item container  md={8}
        lg={8}
        xl={8} style={{justifyContent: "flex-end"}}>
      <Grid
        item
        xs={12}
        sm={4}
        md={2}
        lg={3}
        xl={3}
        style={isPhone ? { padding: "13px" } : { padding: "20px" }}
      >
        <FormControl variant="outlined" className={classes.rootcompany}>
          <InputLabel
            id="demo-simple-select-outlined-label"
            style={{ color: "white" }}
          >
            Active/Disable
          </InputLabel>
          <Select
            fullWidth
            labelId="demo-simple-select-outlined-label"
            id="company"
            open={openactive}
            value={active}
            onClose={() => {
              setOpenActive(false);
            }}
            onOpen={() => {
              setOpenActive(true);
            }}
            onChange={handleActive}
            label="Company"
            classes={{ icon: classes.popupcompany }}
            MenuProps={{
              PopoverClasses: { paper: classes.backcompany },
            }}
          >
            <MenuItem value={All} onClick={sortAll}>
              All
            </MenuItem>
            <MenuItem value={active} onClick={sortActive}>
              Active Users
            </MenuItem>
            <MenuItem value={disabled} onClick={sortDisabled}>
              Disabled Users
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid
        item
        xs={12}
        sm={4}
        md={2}
        lg={3}
        xl={3}
        style={isPhone ? { padding: "13px" } : { padding: "20px" }}
      >
        <FormControl variant="outlined" className={classes.rootcompany}>
          <InputLabel
            id="demo-simple-select-outlined-label"
            style={{ color: "white" }}
          >
            Sort By
          </InputLabel>
          <Select
            fullWidth
            labelId="demo-simple-select-outlined-label"
            id="company"
            open={opensort}
            value={sort}
            onClose={() => {
              setOpenSort(false);
            }}
            onOpen={() => {
              setOpenSort(true);
            }}
            onChange={handleSort}
            label="Company"
            classes={{ icon: classes.popupcompany }}
            MenuProps={{
              PopoverClasses: { paper: classes.backcompany },
            }}
          >
            <MenuItem value={alpha} onClick={sortAplha}>
              A to Z
            </MenuItem>
            <MenuItem value={newest} onClick={sortNew}>
              Newest Users
            </MenuItem>
            <MenuItem value={oldest} onClick={sortOld}>
              Older Users
            </MenuItem>
           
          </Select>
        </FormControl>
      </Grid>
      </Grid>
    </Grid>
  );
};

export default Search;
