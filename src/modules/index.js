import { combineReducers } from "redux";
import { subPriceReducer } from "./orderModules/orderModule";
import { emailReducer } from "./orderModules/orderModule";
import { emailIdReducer } from "./orderModules/orderModule";
import { emailDomainReducer } from "./orderModules/orderModule";
import { navbarReducer, hiddenNavbarReducer } from "./mainModules/navbarModule";
import { agreementReducer } from "./userModules/userModule";
import {
  deliveryReducer,
  deliveryTargetReducer,
} from "./deliveryModules/deliveryModule";
import { modalReducer } from "./modalModules/modalModule";

const rootReducer = combineReducers({
  subPriceReducer,
  emailIdReducer,
  emailDomainReducer,
  emailReducer,
  navbarReducer,
  hiddenNavbarReducer,
  agreementReducer,
  deliveryReducer,
  deliveryTargetReducer,
  modalReducer,
});

export default rootReducer;
