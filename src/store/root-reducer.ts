import { combineReducers } from "redux";

import workReducer from '../features/works/reducer';
import profileReducer from '../features/profile/reducer';

export default combineReducers({
  works: workReducer,
  profile: profileReducer
});
