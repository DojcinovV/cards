import { all } from "redux-saga/effects";
import cards from "./cards.saga";

export default function* rootSaga() {
  yield all([cards()]);
}
