import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contact/addContact", ({ name, number }) => ({
  payload: {
    contact: {
      id: uuidv4(),
      name,
      number,
    },
  },
}));
const removeContact = createAction("contact/removeContact");
const changeFilter = createAction("contact/changeFilter");

export default {
  addContact,
  removeContact,
  changeFilter,
};
