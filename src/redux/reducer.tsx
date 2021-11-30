import { combineReducers } from "redux";
import reducerCounter from "./counter/reducer";
import reducerColer from "./coler/reducer";

export const reducer = combineReducers({
  counter: reducerCounter,
  coler: reducerColer
});
