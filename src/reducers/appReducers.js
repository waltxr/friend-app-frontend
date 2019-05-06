import * as types from '../actions/actionTypes';
import merge from 'lodash/merge'

const initialState = {
  isAuthenticated: false,
  isAuthenticating: false,
  currentUser: {},
  userComments: {},
  userGrievances: {},
  token: null,
  errors: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case types.AUTHENTICATION_REQUEST:
      return {
        ...state,
        isAuthenticating: true
      }

    case types.AUTHENTICATION_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isAuthenticating: false,
        currentUser: action.user.entities.user,
        userComments: action.user.entities.comments,
        userGrievances: action.user.entities.grievances,
        token: action.token
      }

    case types.AUTHENTICATION_FAILURE:
      return {
        isAuthenticated: false,
        isAuthenticating: false,
        currentUser: {},
        token: null,
        errors: action.errors.message
      }

    case types.LOGOUT:
      return {...state,
        isAuthenticated: false,
        isAuthenticating: false,
        currentUser: {},
        token: null
      }

    case types.FILE_GRIEVANCE:
      return {
        ...state,
        userGrievances: merge({}, state.userGrievances, action.grievance.entities.grievances)
      }

    case types.ADD_COMMENT:    
      return {
        ...state,
        userComments: merge({}, state.userComments, action.comment.entities.comments)
      }

    case types.RESET_FORM:
      return state;
    default:
      return state;
  }
}