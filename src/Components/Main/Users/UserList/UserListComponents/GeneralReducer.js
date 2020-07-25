import React, { useReducer, useState, useEffect } from "react";
import FirebaseApp from "../../../../../FireBase/FireBaseConfig";
import Company from "./Company";
import PaperList from "./PaperList";
import Grid from "@material-ui/core/Grid";
import SimpleBackdrop from "./BackDrop/LoadingBackdrop";
import moment from "moment";

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

    case "nextTen": {
      return {
        ...state,
        nextTen: action.value,
      };
    }

    case "moreData": {
      return {
        ...state,
        moreData: action.value + 10,
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
  nextTen: 0,
  moreData: 10,
  userData: [],
};

const GeneralState = () => {
  const [state, dispatch] = useReducer(submitReducer, initialState);
  const [loading, setLoading] = useState(false);
  const [userFetch, setUserFetch] = useState(0);

  var userRef = FirebaseApp.firestore().collection("users");

  useEffect(() => {
    setLoading(true);
    userRef.get().then((snapshot) => {
      const dataArray = [];
      setUserFetch(snapshot.docs.length);
      var lastVisible = snapshot.docs[snapshot.docs.length - 1];
      dispatch({ type: "nextTen", value: lastVisible });
      snapshot.forEach((doc) => {
        const data = doc.data();
        dataArray.push(data);
      });
      dispatch({ type: "fetch", value: dataArray });
      setLoading(false);
    });
  }, []);

  return (
    <Grid item container spacing={2} xs={12}>
      <Company state={state} dispatch={dispatch} />
      <PaperList
        state={state}
        dispatch={dispatch}
        loading={loading}
        setLoading={setLoading}
        userFetch={userFetch}
      />
      <SimpleBackdrop loading={loading} />
    </Grid>
  );
};

export default GeneralState;
