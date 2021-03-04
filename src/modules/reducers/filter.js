import { createReducer } from "@reduxjs/toolkit";
import { filterContacts } from "../actions/filterAction";

export default createReducer("", {
  [filterContacts]: (state, { payload }) => payload,
});
