import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./phonebookAction";

export const contactReducer = createReducer([], {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.handleDelete]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

export const inputValueReducer = createReducer("", {
  [actions.handleChange]: (_, { payload }) => payload,
});

export default combineReducers({
  contact: contactReducer,
  inputValue: inputValueReducer,
});
