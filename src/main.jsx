import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
//redux
import { pokemonReducer } from "./reducers/pokemon";
import { Provider } from "react-redux";
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import thunk from 'redux-thunk'

import { logger } from "./middlewares";

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose

const composedEnhacers = composeAlt(
  applyMiddleware(thunk, logger)
);

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = createStore(pokemonReducer, composedEnhacers);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
