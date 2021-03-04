import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("ADD_CONTACT", function prepare(
  contact
) {
  return {
    payload: { ...contact, id: uuidv4() },
  };
});
export const deleteContact = createAction("DELETE_CONTACT");
