import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import contactAction from "./contactAction";

const defaultContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const loc = JSON.parse(localStorage.getItem("contacts"));
const defContact = loc.length > 0 ? loc : defaultContacts;

const onAddContact = (state, { payload }) => [payload.contact, ...state];
const onRemoveContact = (state, { payload }) =>
  state.filter(({ id }) => id !== payload);

const items = createReducer(defContact, {
  [contactAction.addContact]: onAddContact,
  [contactAction.removeContact]: onRemoveContact,
});

const filter = createReducer("", {
  [contactAction.changeFilter]: (state, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
