import { takeEvery, put } from "redux-saga/effects";
import { addTodo, addTodoSaga } from "../todoSlice";

function* addTodoWorker(action) {
    yield put(addTodo(action.payload));
}

export function* watchTodoSaga() {
    yield takeEvery(addTodoSaga.type, addTodoWorker);
}