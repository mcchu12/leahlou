import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { fetchAbout, fetchProfile } from './service';

export const getProfileActions = {
  request: 'GET_PROFILE_REQUEST',
  success: 'GET_PROFILE_SUCCESS',
  failure: 'GET_PROFILE_FAILURE',
}

export const getAboutActions = {
  request: 'GET_ABOUT_REQUEST',
  success: 'GET_ABOUT_SUCCESS',
  failure: 'GET_ABOUT_FAILURE',
}

export const getPersonal = (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
  dispatch({ type: getProfileActions.request });

  const res = await fetchProfile();

  const data = res.data();

  dispatch({ type: getProfileActions.success, payload: data })
}


export const getAbout = (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
  dispatch({ type: getAboutActions.request });

  const res = await fetchAbout();

  const data = res.data();

  dispatch({ type: getAboutActions.success, payload: data })
}