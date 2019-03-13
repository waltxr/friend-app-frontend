import * as types from '../actions/actionTypes';

const initialState = {
  list: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case types.REQUEST_USERS:
      return {
        ...state,
        list: action.users
      }

      case types.FILE_GRIEVANCE:
        return state.concat(action.grievance)

    default:
      return state;

  }
}
