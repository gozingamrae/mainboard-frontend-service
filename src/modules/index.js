import { combineReducers } from "redux";
import { subPriceReducer } from "./orderModules/orderModule";
import { emailReducer } from "./orderModules/orderModule";
import { emailIdReducer } from "./orderModules/orderModule";
import { emailDomainReducer } from "./orderModules/orderModule";
import { navbarReducer, hiddenNavbarReducer } from "./mainModules/navbarModule";
import {
  deliveryReducer,
  deliveryTargetReducer,
} from "./deliveryModules/deliveryModule";
import { modalReducer } from "./modalModules/modalModule";
import { agreementReducer } from "./memberModules/memberModule";
import { memberAPIReducer } from "./memberModules/memberAPIModule";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
  key: "root",
  storage: storage,
};

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
  memberAPIReducer,
});

export default persistReducer(persistConfig, rootReducer);
