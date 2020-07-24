import React, { useReducer, useState, useEffect } from "react";
import FirebaseApp from "../../../../../FireBase/FireBaseConfig";
import Company from "./Company";
import PaperList from "./PaperList";
import Grid from "@material-ui/core/Grid";

function submitReducer(state, action) {
  switch (action.type) {
    case "field": {
      return {
        ...state,
        [action.field]: action.value,
      };
    }

    case "fetch": {
      return {
        ...state,
        userData: action.value,
      };
    }

    default:
      break;
  }
  return state;
}

const initialState = {
  comp: "",
  depa: "",

  userData: [],
};

const GeneralState = () => {
  const [state, dispatch] = useReducer(submitReducer, initialState);

  useEffect(() => {
    var userRef = FirebaseApp.firestore().collection("users");
    userRef
      .limit(10)
      .get()
      .then((snapshot) => {
        const dataArray = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          dataArray.push(data);
        });
        dispatch({ type: "fetch", value: dataArray });
        console.log(dataArray);
      });
  }, []);

  return (
    <Grid item container spacing={2} xs={12}>
      <Company state={state} dispatch={dispatch} />
      <PaperList state={state} dispatch={dispatch} />
    </Grid>
  );
};

export default GeneralState;
