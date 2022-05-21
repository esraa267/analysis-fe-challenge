import { createStore } from "redux";
import filterdataReducer from "./reducer";
const store =  createStore(filterdataReducer);
export default store;


