import React, { useEffect, useState } from "react";
import FirebaseApp from "../../../../../FireBase/FireBaseConfig";
import Company from "./Company";
import PaperList from "./PaperList";
import Grid from "@material-ui/core/Grid";
import SimpleBackdrop from "./BackDrop/LoadingBackdrop";
import { useUserList } from "../../../../Context/UserListContext";

const GeneralState = () => {
  const { state, dispatch } = useUserList();
  const { reFetch, OriginuserData } = state;

  var userRef = FirebaseApp.firestore().collection("users");

  useEffect(() => {
    dispatch({ type: "loading", value: true });
    userRef.orderBy("firstName").onSnapshot((snapshot) => {
      const dataArray = [];
      dispatch({ type: "userFetch", value: snapshot.docs.length });
      var lastVisible = snapshot.docs[snapshot.docs.length - 1];
      dispatch({ type: "nextTen", value: lastVisible });
      snapshot.forEach((doc) => {
        const data = doc.data();
        dataArray.push(data);
      });
      dispatch({ type: "fetch", value: dataArray });
      dispatch({ type: "copyfetch", value: dataArray });
      dispatch({ type: "loading", value: false });
    });
  }, [reFetch]);

  return (
    <Grid item container spacing={2} xs={12}>
      <Company state={state} dispatch={dispatch} />
      <PaperList />
      <SimpleBackdrop />
    </Grid>
  );
};

export default GeneralState;
