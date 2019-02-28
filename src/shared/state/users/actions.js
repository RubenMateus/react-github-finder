import * as actionsTypes from './actionTypes';
import * as api from '../../../utils/api-service';

const updateUserList = function (users) {
  return {
    type: actionsTypes.USER_SEARCH_FETCHED,
    payload: users
  };
}

export const submitSearch = (searchInput) => {
  return async (dispatch) => {
    const searchQuery = searchInput;
    const response = await api.users.fetch(searchQuery);
    return dispatch(updateUserList(response));
  }
}

