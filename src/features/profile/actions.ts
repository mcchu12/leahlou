import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { fetchAbout, fetchProfile, fetchSocials } from '../../services/profile-service';

export const getProfileActions = {
  request: 'GET_PROFILE_REQUEST',
  success: 'GET_PROFILE_SUCCESS',
  failure: 'GET_PROFILE_FAILURE',
}

export const getSocialsActions = {
  request: 'GET_SOCIALS_REQUEST',
  success: 'GET_SOCIALS_SUCCESS',
  failure: 'GET_SOCIALS_FAILURE',
}

export const getAboutActions = {
  request: 'GET_ABOUT_REQUEST',
  success: 'GET_ABOUT_SUCCESS',
  failure: 'GET_ABOUT_FAILURE',
}

export const getPersonal = (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
  dispatch({ type: getProfileActions.request });

  const res = await fetchProfile();

  dispatch({ type: getProfileActions.success, payload: res })
}

export const getSocials = (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
  dispatch({ type: getSocialsActions.request });

  const res = await fetchSocials();

  dispatch({ type: getSocialsActions.success, payload: res });
}

export const getAbout = (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
  dispatch({ type: getAboutActions.request });

  const res = await fetchAbout();

  dispatch({ type: getAboutActions.success, payload: res })
}