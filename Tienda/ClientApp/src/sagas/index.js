import { all } from "redux-saga/effects";
import authSagas from "./Auth";
import tienda from "./Tienda";

export default function* rootSaga(getState) {
  yield all([authSagas(), tienda()]);
}
