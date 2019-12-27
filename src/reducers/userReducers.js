import * as types from '../actions/actionTypes';

const initialState = {
  list: [],
  group: undefined
}

export default (state = initialState, action) => {
  switch(action.type) {
    case types.REQUEST_USERS:
      return {
        ...state,
        list: action.users
      }

    default:
      return state;

  }
}
