import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import thunk  from "redux-thunk"
import { createStore, applyMiddleware } from "redux";
import Logger from "redux-logger";

import "./index.css";
import App from "./App";
import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, Logger)
  /* applyMiddleware goes here */
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
