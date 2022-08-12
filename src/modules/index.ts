import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import { all, fork } from "redux-saga/effects";
import counterReducer from "./counter";
import { watchIncrement } from "./counter";

const sagaMiddleware = createSagaMiddleware();

function* saga() {
	yield all([fork(watchIncrement)]);
}

export const store = configureStore({
	reducer: { counter: counterReducer },
	middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
