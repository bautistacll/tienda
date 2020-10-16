import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { SIGNIN_USER } from "constants/ActionTypes";

const signInRequest = async () => await true;

function* signInUserWithEP() {
  try {
    const signInUser = yield call(signInRequest);
    if (signInUser) {
      yield put(() => "success");
    } else {
      localStorage.setItem("user_id", "test");
      yield put(() => "aprobado_tienda");
    }
  } catch (error) {
    yield put(() => "error");
  }
}

export function* signInUser() {
  yield takeEvery(SIGNIN_USER, signInUserWithEP);
}

export default function* rootSaga() {
  yield all([fork(signInUser)]);
}
