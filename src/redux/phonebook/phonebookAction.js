import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contact/addContact");

const handleDelete = createAction("contact/Delete");

const handleChange = createAction("contact/OnChange");

const actions = { addContact, handleDelete, handleChange };

export default actions;
