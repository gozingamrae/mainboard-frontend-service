import { combineReducers } from "redux";
import { defaultReducer } from "./mainModules/mainModule";
import { subPriceReducer } from "./orderModules/orderModule";
import { emailReducer } from "./orderModules/orderModule";
import { emailIdReducer } from "./orderModules/orderModule";
import { emailDomainReducer } from "./orderModules/orderModule";



const rootReducer = combineReducers({
  defaultReducer,
  subPriceReducer,
  emailIdReducer,
  emailDomainReducer,
  emailReducer
});

export default rootReducer;
