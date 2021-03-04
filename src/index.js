import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { Provider } from "react-redux";
import globalState from "./redux/store";
// import globalState from "./modules/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={globalState}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
