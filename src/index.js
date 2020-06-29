import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { FirebaseAppProvider } from "reactfire";
import FireBaseConfig from "./FireBase/FireBaseConfig";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={FireBaseConfig}>
      <Suspense fallback={"Conectando la App"}>
        <HashRouter>
          <App />
        </HashRouter>
      </Suspense>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
