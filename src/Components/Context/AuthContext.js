import React, { useState, useEffect, createContext } from "react";
import FirebaseApp from "../../FireBase/FireBaseConfig";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [data, setData] = useState({});
  const [hex, setHex] = useState("#ffffff");

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
    <AuthContext.Provider value={{ user, data, hex }}>
      {children}
    </AuthContext.Provider>
  );
};
