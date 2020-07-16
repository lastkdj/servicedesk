import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { HashRouter } from "react-router-dom";
import MaxProvider from "./Components/Context/MaxProvider";

ReactDOM.render(
  <React.StrictMode>
    <MaxProvider>
      <Suspense fallback={"Conectando la App"}>
        <HashRouter>
          <App />
        </HashRouter>
      </Suspense>
    </MaxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
