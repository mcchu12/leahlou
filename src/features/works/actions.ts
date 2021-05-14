import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { fetchWorks, fetchWorkImages } from './service';

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

  const data = res.docs.map(doc => doc.data());

  if (!(data.length === 0)) { dispatch({ type: getWorksActions.success, payload: data }) }
  else { dispatch({ type: getWorksActions.failure }) }
}

export const getWorkImages = (name: string): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
  dispatch({ type: getWorkImageActions.request });

  const res = await fetchWorkImages(name);

  const data = res.docs.map(doc => doc.data());

  if (!(data.length === 0)) dispatch({ type: getWorkImageActions.success, payload: { name, images: data } });
  else { dispatch({ type: getWorkImageActions.failure }) }
}