import { configureStore } from "@reduxjs/toolkit";

// redux toolkit with Slices
import filter from "./slices/filterSlices";
import contacts from "./slices/contactsSlices";

const rootReducer = { contacts, filter };

const globalState = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

// // redux toolkit
// const globalState = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filter: filterReducer,
//   },
//   devTools: process.env.NODE_ENV !== "production",
// });

export default globalState;
