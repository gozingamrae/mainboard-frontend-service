import { combineReducers } from "redux";
import { navbarReducer, hiddenNavbarReducer } from "./mainModules/navbarModule";

const rootReducer = combineReducers({
  navbarReducer,
  hiddenNavbarReducer,
});

export default rootReducer;
