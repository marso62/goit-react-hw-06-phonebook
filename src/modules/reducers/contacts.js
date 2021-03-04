import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact } from "../actions/contactsAction";

export default createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});
