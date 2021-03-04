import { ADD_CONTACT, DELETE_CONTACT, GET_CONTACTS } from "../types/types";
import storage from "../../utils/storage";

const initialState = [];

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload];

    case DELETE_CONTACT:
      return state.filter((contact) => contact.id !== action.payload);

    case GET_CONTACTS:
      return storage.get("contacts");

    default:
      return state;
  }
};
