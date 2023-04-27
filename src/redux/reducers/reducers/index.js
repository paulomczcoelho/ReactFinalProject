import { combineReducers } from "redux";
import emailSlice from "./emailSlice";


export const rootReducer = combineReducers({
    emailData: emailSlice
});