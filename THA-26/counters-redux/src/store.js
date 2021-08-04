import rootReducer from "./redux";
import { createStore } from "redux";

const store = createStore(rootReducer);

export default store;