import * as actionTypes from './actionTypes';

const initialState = {
  list: [],
  user: {}
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.USER_SEARCH_FETCHED:
      return {
        ...state,
        list: action.payload
      };
    case actionTypes.USER_FETCHED:
      return {
        ...state,
        user: action.payload
    };
    default:
      return state;
  }
};

export default reducer;