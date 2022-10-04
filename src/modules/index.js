import { combineReducers } from "redux";
import { subPriceReducer } from "./orderModules/orderModule";
import { emailReducer } from "./orderModules/orderModule";
import { emailIdReducer } from "./orderModules/orderModule";
import { emailDomainReducer } from "./orderModules/orderModule";
import { navbarReducer, hiddenNavbarReducer } from "./mainModules/navbarModule";
import { agreementReducer } from "./memberModules/memberModule";
import { memberAPIReducer } from "./memberModules/memberAPIModule";

const rootReducer = combineReducers({
  subPriceReducer,
  emailIdReducer,
  emailDomainReducer,
  emailReducer,
  navbarReducer,
  hiddenNavbarReducer,
  agreementReducer,
  memberAPIReducer
});

export default rootReducer;
