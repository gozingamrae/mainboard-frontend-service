import { combineReducers } from "redux";
import { defaultReducer } from "./mainModules/mainModule";

const rootReducer = combineReducers({
  defaultReducer,
});

export default rootReducer;
