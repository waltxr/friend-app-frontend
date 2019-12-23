import * as types from '../actions/actionTypes';
import merge from 'lodash/merge'

const initialState = {
  isAuthenticated: false,
  isAuthenticating: false,
  currentUser: {},
  userComments: {},
  userFiledGrievances: {},
  userReceivedGrievances: {},
  token: null,
  errors: null,
  currentGroup: {}
}

export default (state = initialState, action) => {
  switch(action.type) {
    case types.AUTHENTICATION_REQUEST:
      return {
        ...state,
        isAuthenticating: true
      }

    case types.AUTHENTICATION_SUCCESS:

      if (!action.user.entities.user) {
        action.user.entities.user = state.currentUser
      } if (!action.user.entities.comments) {
        action.user.entities.comments = state.userComments
      } if (!action.user.entities.filed_grievances) {
        action.user.entities.filed_grievances = state.userFiledGrievances
      } if (!action.user.entities.received_grievances) {
        action.user.entities.received_grievances = state.userReceivedGrievances
      }
      let user = Object.keys(action.user.entities.user).map(key => action.user.entities.user[key])[0]

      return {
        ...state,
        isAuthenticated: true,
        isAuthenticating: false,
        currentUser: user,
        userComments: action.user.entities.comments,
        userFiledGrievances: action.user.entities.filed_grievances,
        userReceivedGrievances: action.user.entities.received_grievances,
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
        userComments: {},
        userFiledGrievances: {},
        userReceivedGrievances: {},
        token: null
      }

    case types.FILE_GRIEVANCE:
      return {
        ...state,
        userFiledGrievances: merge({}, state.userFiledGrievances, action.grievance.entities.grievances)
      }

    case types.ADD_COMMENT:
      return {
        ...state,
        userComments: merge({}, state.userComments, action.comment.entities.comments)
      }

    case types.SET_GROUP:
      return {
        ...state,
        currentGroup: action.group
      }

    case types.RESET_FORM:
      return state;
    default:
      return state;
  }
}
