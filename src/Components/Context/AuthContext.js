import React, { useState, useEffect, createContext } from "react";
import FirebaseApp from "../../FireBase/FireBaseConfig";
import moment from "moment";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [data, setData] = useState({});
  const [hex, setHex] = useState("#842CB7");
  const [firstLog, setFirstLog] = useState(false);

  useEffect(() => {
    FirebaseApp.auth().onAuthStateChanged(function (user) {
      if (user) {
        setUser(user);
        const uploading = () => {
          FirebaseApp.firestore()
            .collection("users")
            .doc(FirebaseApp.auth().currentUser.uid)
            .onSnapshot(function (doc) {
              if (doc.exists) {
                setData(doc.data());
                FirebaseApp.firestore()
                  .collection("users")
                  .doc(FirebaseApp.auth().currentUser.uid)
                  .update({
                    lastlogin: moment(Date.now()).format(
                      "dddd Do MMMM YYYY, h:mm:ss a"
                    ),
                  })
                  .then(() => {
                    if (doc.data().joinDate === doc.data().lastlogin) {
                      setFirstLog(true);
                    }
                  });
              } else {
                console.log("No hay nada papi");
              }
            });
        };
        uploading();
        const randomColor =
          "#" + Math.floor(Math.random() * 16777215).toString(16);
        setHex(randomColor);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, data, hex, firstLog, setFirstLog }}>
      {children}
    </AuthContext.Provider>
  );
};
