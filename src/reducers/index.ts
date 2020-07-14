import { combineReducers } from "redux";

import appReducer from "./appReducer";
import questionReducer from "./questionReducer";

const rootReducer = combineReducers({
  appReducer,
  questionReducer,
});

export default rootReducer;
