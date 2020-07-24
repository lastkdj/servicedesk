import FirebaseApp from "../../../../../../FireBase/FireBaseConfig";

const DepartmentFilter = (event, dispatch, comp) => {
  dispatch({ type: "field", field: "depa", value: event });

  var userRef = FirebaseApp.firestore().collection("users");
  if (event === "" && comp !== "") {
    userRef
      .where("company", "==", comp)
      .get()
      .then((snapshot) => {
        const dataArray = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          dataArray.push(data);
        });
        dispatch({ type: "fetch", value: dataArray });
      });
  } else if (comp !== "") {
    userRef
      .where("department", "==", event)
      .where("company", "==", comp)
      .get()
      .then((snapshot) => {
        const dataArray = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          dataArray.push(data);
        });
        dispatch({ type: "fetch", value: dataArray });
      });
  } else if (event === "" && comp === "") {
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
      });
  } else {
    userRef
      .where("department", "==", event)
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

export default DepartmentFilter;
