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
import { memberUpdateReducer } from "./memberModules/memberUpdateModule";
import { findReducer } from "./memberModules/memberFindIdModule";
import { orderInfoReducer } from "./orderModules/orderInfoModule";
import { paymentInfoReducer } from "./paymentModules/paymentInfoModule";
import { orderFinalReducer } from "./orderModules/orderFinalModule";
import {productReducer} from "./productModules/ProductModule";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  // localStorage에 저장
  storage: storage,
  whitelist: ["memberAPIReducer"],
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
  memberAPIReducer,
  memberUpdateReducer,
  findReducer,
  orderInfoReducer,
  paymentInfoReducer,
  orderFinalReducer,
  productReducer
});

export default persistReducer(persistConfig, rootReducer);
