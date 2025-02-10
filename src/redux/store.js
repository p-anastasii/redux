import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import todoReducer from './todoSlice';
import createSagaMiddleware from "redux-saga";
import { watchTodoSaga } from "./sagas/todoSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        counter: counterReducer,
        todos: todoReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watchTodoSaga);

export default store;