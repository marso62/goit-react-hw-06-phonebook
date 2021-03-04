import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    filterContacts: (state, { payload }) => payload,
  },
});

export const { filterContacts } = filterSlice.actions;
export const filter = (state) => state.filter;
export default filterSlice.reducer;
