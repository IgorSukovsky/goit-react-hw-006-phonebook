import { configureStore } from "@reduxjs/toolkit";
import combineReducers from "./phonebook/phonebookReducer";

const store = configureStore({
  reducer: combineReducers,
});

export default store;
