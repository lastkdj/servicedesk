import React, { useEffect, useState } from "react";
import FirebaseApp from "../../../../FireBase/FireBaseConfig";

const UserList = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    FirebaseApp.firestore()
      .collection("users")
      .limit(5)
      .get()
      .then((snapshot) => {
        const dataArray = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          dataArray.push(data);
        });
        setUserData(dataArray);
      });
  }, []);

  return (
    <div>
      <h1>User Lists</h1>
      {userData &&
        userData.map((user) => {
          return (
            <div>
              <div>{user.firstName}</div>
              <div>{user.lastName}</div>
              <div>{user.email}</div>
              <div>{user.password}</div>
            </div>
          );
        })}
    </div>
  );
};

export default UserList;
