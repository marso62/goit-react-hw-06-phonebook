import { v4 as uuidv4 } from "uuid";

import { ADD_CONTACT, DELETE_CONTACT, GET_CONTACTS } from "../types/types";

export const addContact = (contact) => ({
  type: ADD_CONTACT,
  payload: { ...contact, id: uuidv4() },
});

export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});

export const getContacts = () => ({
  type: GET_CONTACTS,
});
