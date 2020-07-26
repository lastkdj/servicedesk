const DepartmentFilter = (event, dispatch, OriginuserData, comp) => {
  dispatch({ type: "field", field: "depa", value: event });

  if (event === "All" && comp !== "All") {
    const NoDepabutCompArray = OriginuserData.filter(function (user) {
      return user.company === comp;
    });
    dispatch({ type: "fetch", value: NoDepabutCompArray });
  } else if (comp !== "All") {
    const DepabutCompArray = OriginuserData.filter(function (user) {
      return user.company === comp && user.department === event;
    });

    dispatch({ type: "fetch", value: DepabutCompArray });
  } else if (event === "All" && comp === "All") {
    dispatch({ type: "fetch", value: OriginuserData });
  } else {
    const DepaArray = OriginuserData.filter(function (user) {
      return user.department === event;
    });
    dispatch({ type: "fetch", value: DepaArray });
  }
};

export default DepartmentFilter;
