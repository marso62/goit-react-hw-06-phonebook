import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: [],
  reducers: {
    addContact: (state, { payload }) => {
      state.push(payload);
    },
    deleteContact: (state, { payload }) =>
      state.filter((contact) => contact.id !== payload),
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contacts = (state) => state.contacts;
export default contactsSlice.reducer;
