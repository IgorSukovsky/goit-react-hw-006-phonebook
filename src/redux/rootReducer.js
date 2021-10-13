import { combineReducers } from "redux";
import phonesReducer from "./phonebook/phonebookReducer";

const rootReducer = combineReducers({
  contacts: phonesReducer,
});
export default rootReducer;
