import * as types from '../actions/actionTypes';

export default (state = [], action) => {
  switch(action.type) {
    case types.FILE_GRIEVANCE:
      return state.concat(action.grievance)

    case types.RESET_FORM:
      return state;

    default:
      return state;

  }
}
