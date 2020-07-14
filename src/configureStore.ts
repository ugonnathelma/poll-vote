import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import rootReducer from "./reducers";

export default function configureStore(preloadedState: {}) {
  const middlewares = [thunkMiddleware];

  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  );

  return store;
}
