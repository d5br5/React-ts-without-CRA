import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { call, delay, put, takeLatest } from "redux-saga/effects";

export interface CounterState {
	value: number;
}

const initialState: CounterState = {
	value: 0,
};

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		incrementByAmount: (state, action: PayloadAction<number>) => {
			state.value += action.payload;
		},
		incrementSuccess: (state) => {
			state.value = 1000;
		},
		incrementFailure: (state) => {
			state.value = -400;
		},
	},
});

function* incrementSaga(action: PayloadAction<CounterState>) {
	try {
		yield call(increment);
		yield delay(1000);
		yield put({
			type: incrementSuccess,
		});
	} catch (err) {
		yield put({ type: incrementFailure });
	}
}

export function* watchIncrement() {
	yield takeLatest(increment.type, incrementSaga);
}

export const {
	increment,
	decrement,
	incrementByAmount,
	incrementSuccess,
	incrementFailure,
} = counterSlice.actions;
export default counterSlice.reducer;
