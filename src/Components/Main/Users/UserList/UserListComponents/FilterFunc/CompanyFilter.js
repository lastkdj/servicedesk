const CompanyFilter = (event, dispatch, OriginuserData, depa) => {
  dispatch({ type: "field", field: "comp", value: event });
  if (event === "All" && depa !== "All") {
    const NoCpmpbutDepaArray = OriginuserData.filter(function (user) {
      return user.department === depa;
    });

    dispatch({ type: "fetch", value: NoCpmpbutDepaArray });
  } else if (depa !== "All") {
    const CompbutDepaArray = OriginuserData.filter(function (user) {
      return user.department === depa && user.company === event;
    });

    dispatch({ type: "fetch", value: CompbutDepaArray });
  } else if (event === "All" && depa === "All") {
    dispatch({ type: "fetch", value: OriginuserData });
  } else {
    const CompArray = OriginuserData.filter(function (user) {
      return user.company === event;
    });

    dispatch({ type: "fetch", value: CompArray });
  }
};

export default CompanyFilter;
