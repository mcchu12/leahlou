import { Reducer, combineReducers } from 'redux';
import { getWorkImageActions, getWorksActions } from './actions';

const infosReducer: Reducer<WorkState, PayloadAction> = (state = {}, action) => {
  switch (action.type) {
    case getWorksActions.success:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

const imagesReducer: Reducer<ImageState, PayloadAction> = (state = {}, action) => {
  switch (action.type) {
    case getWorkImageActions.success:
      return { ...state, [action.payload.name]: action.payload.images }
    default:
      return state;
  }
}

export default combineReducers({
  infos: infosReducer,
  images: imagesReducer
});