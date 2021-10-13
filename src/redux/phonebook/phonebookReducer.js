import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./phonebookAction";

export const contactItemsReducer = createReducer([], {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.setContacts]: (_, { payload }) => payload,
  [actions.handleDelete]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

export const filterReducer = createReducer("", {
  [actions.handleChange]: (_, { payload }) => payload,
});

const phonesReducer = combineReducers({
  items: contactItemsReducer,
  filter: filterReducer,
});

export default phonesReducer;
