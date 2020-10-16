import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
  GET_ALL_FRUTAS,
  GET_ALL_VERDURAS,
  GET_ALL_CATEGORY_BY_ID,
} from "constants/ActionTypes";
import {
  save_frutas,
  save_verduras,
  save_all_category,
} from "../actions/Tienda";
import { callControllerGetCartegory } from "../service/services";

const allCategoryByIdController = async (Id) =>
  await callControllerGetCartegory(Id)
    .then((response) => response)
    .catch((error) => error);

function* allCategoryByIdRequest({ payload }) {
  const Id = payload;
  try {
    const response = yield call(allCategoryByIdController, Id);
    if (response != null) {
      yield put(save_all_category(response));
    }
  } catch (error) {
    yield put(() => "error");
  }
}

export function* allCategoryById() {
  yield takeEvery(GET_ALL_CATEGORY_BY_ID, allCategoryByIdRequest);
}

export default function* rootSaga() {
  yield all([fork(allCategoryById)]);
}
