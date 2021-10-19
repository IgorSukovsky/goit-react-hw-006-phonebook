import React from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../redux/phonebook/phonebookAction";
import Filter from "./Filter";

const FilterContainer = () => {
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  const handleChange = (value) => dispatch(actions.handleChange(value));

  return <Filter filter={filter} handleChange={handleChange} />;
};

export default FilterContainer;
