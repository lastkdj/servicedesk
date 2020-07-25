import FirebaseApp from "../../../../../../FireBase/FireBaseConfig";

const CompanyFilter = (event, dispatch, depa) => {
  dispatch({
    type: "field",
    field: "comp",
    value: event,
  });
  var userRef = FirebaseApp.firestore().collection("users");

  if (event === "" && depa !== "") {
    userRef
      .where("department", "==", depa)
      .get()
      .then((snapshot) => {
        const dataArray = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          dataArray.push(data);
        });
        dispatch({ type: "fetch", value: dataArray });
      });
  } else if (depa !== "") {
    userRef
      .where("company", "==", event)
      .where("department", "==", depa)
      .get()
      .then((snapshot) => {
        const dataArray = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          dataArray.push(data);
        });
        dispatch({ type: "fetch", value: dataArray });
      });
  } else if (event === "" && depa === "") {
    userRef.get().then((snapshot) => {
      const dataArray = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        dataArray.push(data);
      });
      dispatch({ type: "fetch", value: dataArray });
    });
  } else {
    userRef
      .where("company", "==", event)
      .get()
      .then((snapshot) => {
        const dataArray = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          dataArray.push(data);
        });
        dispatch({ type: "fetch", value: dataArray });
      });
  }
};

export default CompanyFilter;
