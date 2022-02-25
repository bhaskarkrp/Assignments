import { createStore } from "redux";
import { reducer } from "./reducer";

export const store = createStore(reducer);
export const { dispatch, getState } = store;
