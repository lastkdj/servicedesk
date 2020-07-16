import React, { useState, useEffect, createContext } from "react";
import FirebaseApp from "../../FireBase/FireBaseConfig";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [data, setData] = useState({});

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
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, data }}>
      {children}
    </AuthContext.Provider>
  );
};
