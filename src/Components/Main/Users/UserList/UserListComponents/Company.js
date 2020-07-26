import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import CompanyFilter from "./FilterFunc/CompanyFilter";
import DepartmentFilter from "./FilterFunc/DepartmentFilter";

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
}));

const sb = "Soletanche Bachy";
const frey = "Freyssinet";
const ta = "Tierra Armada";
const all = "All";
const it = "IT Department";
const acc = "Accounting";
const st = "Study";
const grmd = "442 GRMD";
const hua = "450 Huatacondo";
const piq = "452 Pique Inco";
const cand = "453 Candelaria";

const Company = (props) => {
  const classes = useStyles();
  const { comp, depa } = props.state;
  const [opencomp, setOpenComp] = useState(false);
  const [opendepa, setOpenDepa] = useState(false);

  return (
    <React.Fragment>
      <Grid item xs={2}>
        <FormControl variant="outlined" className={classes.rootcompany}>
          <InputLabel
            id="demo-simple-select-outlined-label"
            style={{ color: "white" }}
          >
            Company
          </InputLabel>
          <Select
            fullWidth
            labelId="demo-simple-select-outlined-label"
            id="company"
            open={opencomp}
            value={comp}
            onClose={() => {
              setOpenComp(false);
            }}
            onOpen={() => {
              setOpenComp(true);
            }}
            onChange={(event) =>
              CompanyFilter(
                event.target.value,
                props.dispatch,
                props.state.OriginuserData,
                props.state.depa
              )
            }
            label="Company"
            classes={{ icon: classes.popupcompany }}
            MenuProps={{
              PopoverClasses: { paper: classes.backcompany },
            }}
          >
            <MenuItem value={all}>All</MenuItem>
            <MenuItem value={sb}>Soletanche Bachy</MenuItem>
            <MenuItem value={frey}>Freyssinet</MenuItem>
            <MenuItem value={ta}>Tierra Armada</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={2}>
        <FormControl variant="outlined" className={classes.rootcompany}>
          <InputLabel
            id="demo-simple-select-outlined-label"
            style={{ color: "white" }}
          >
            Department
          </InputLabel>
          <Select
            fullWidth
            labelId="demo-simple-select-outlined-label"
            id="department"
            open={opendepa}
            value={depa}
            onClose={() => {
              setOpenDepa(false);
            }}
            onOpen={() => {
              setOpenDepa(true);
            }}
            onChange={(event) =>
              DepartmentFilter(
                event.target.value,
                props.dispatch,
                props.state.OriginuserData,
                props.state.comp
              )
            }
            label="Department"
            classes={{ icon: classes.popupcompany }}
            MenuProps={{
              PopoverClasses: { paper: classes.backcompany },
            }}
          >
            <MenuItem value={all}>All</MenuItem>
            <MenuItem value={it}>IT Department</MenuItem>
            <MenuItem value={acc}>Accounting</MenuItem>
            <MenuItem value={st}>Study</MenuItem>
            <MenuItem value={grmd}>442 GRMD</MenuItem>
            <MenuItem value={hua}>450 Huatacondo</MenuItem>
            <MenuItem value={piq}>452 Pique Inco</MenuItem>
            <MenuItem value={cand}>453 Candelaria</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </React.Fragment>
  );
};

export default Company;
