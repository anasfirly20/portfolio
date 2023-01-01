import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// react-router
import { HashRouter } from "react-router-dom";

// react-redux
import { Provider } from "react-redux";
import store from "./redux/configureStore";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>
);
