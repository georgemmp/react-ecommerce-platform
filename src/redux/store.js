import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];

const store = createStore(
  rootReducer,
  process.env.NODE_ENV ? applyMiddleware(...middlewares) : null
);

export default store;
