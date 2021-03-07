import { combineReducers } from "redux";

import authReducer from "../features/authentication/reducer";

export default combineReducers({
  auth: authReducer
});
