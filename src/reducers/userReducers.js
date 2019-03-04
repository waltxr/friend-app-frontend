import * as types from '../actions/actionTypes';

const initialState = {
  users: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case types.REQUEST_USERS:    
      return {
        ...state,
        users: action.users
      }

    default:
      return state;

  }
}
