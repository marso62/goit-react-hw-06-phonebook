import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "../reducers/rootReducer";

const globalState = createStore(rootReducer, devToolsEnhancer());

export default globalState;
