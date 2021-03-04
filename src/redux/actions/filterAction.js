import { FILTER_CONTACTS } from "../types/types";

export const filterContacts = (value) => ({
  type: FILTER_CONTACTS,
  payload: value,
});
