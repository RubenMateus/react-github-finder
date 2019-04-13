import * as actionsTypes from './actionTypes';
import * as api from '../../../utils/api-service';

export const submitSearch = (searchInput) => async (dispatch) => {
  const response = await api.users.fetch(searchInput);

  return dispatch({
    type: actionsTypes.USER_SEARCH_FETCHED,
    payload: response
  });
}

export const searchUser = (username) => async (dispatch) => {
  const response = await api.users.fetchByName(username);

  return dispatch({
    type: actionsTypes.USER_FETCHED,
    payload: response
  });
}

