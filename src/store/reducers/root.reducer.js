import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cards from "./cards.reducer";
import singleCard from "./singleCard.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cards"],
};

const rootReducer = combineReducers({ cards, singleCard });

export default persistReducer(persistConfig, rootReducer);
