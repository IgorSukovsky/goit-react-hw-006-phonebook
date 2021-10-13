import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contact/addContact");

const handleDelete = createAction("contact/Delete");

const handleChange = createAction("contact/OnChange");

const setContacts = createAction("contact/setContacts");

const actions = { addContact, handleDelete, handleChange, setContacts };

export default actions;
