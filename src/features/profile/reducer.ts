import { Reducer, combineReducers } from 'redux';
import { getProfileActions, getAboutActions } from './actions';

const personalReducer: Reducer<Profile | null, PayloadAction<Profile>> = (state = null, action) => {
  switch (action.type) {
    case getProfileActions.success:
      return { ...action.payload };
    default:
      return state;
  }
}

const aboutReducer: Reducer<About | null, PayloadAction<About>> = (state = null, action) => {
  switch (action.type) {
    case getAboutActions.success:
      return { ...action.payload }
    default:
      return state;
  }
}

export default combineReducers({
  personal: personalReducer,
  about: aboutReducer
});