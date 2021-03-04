import { FILTER_CONTACTS } from "../types/types";

const initialState = "";

export default (state = initialState, action) => {
  switch (action.type) {
    case FILTER_CONTACTS: {
      return action.payload;
    }

    default:
      return state;
  }
};
