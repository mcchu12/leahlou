import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { fetchWorks, fetchWorkImages } from '../../services/works-service';

export const getWorksActions = {
  request: 'FETCH_WORKS_REQUEST',
  success: 'FETCH_WORKS_SUCCESS',
  failure: 'FETCH_WORKS_FAILURE',
}

export const getWorkImageActions = {
  request: 'FETCH_WORK_IMAGES_REQUEST',
  success: 'FETCH_WORK_IMAGES_SUCCESS',
  failure: 'FETCH_WORK_IMAGES_FAILURE',
}

export const getWorks = (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
  dispatch({ type: getWorksActions.request });

  const res = await fetchWorks();

  dispatch({ type: getWorksActions.success, payload: res })
}

export const getWorkImages = (name: string): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
  dispatch({ type: getWorkImageActions.request });

  const res = await fetchWorkImages(name);

  dispatch({ type: getWorkImageActions.success, payload: res });
}