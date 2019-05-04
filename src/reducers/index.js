import { combineReducers } from 'redux';
import authReducers from './authReducers';
import userReducers from './userReducers';
import grievanceReducers from './grievanceReducers'

const rootReducer = combineReducers({  
  auth: authReducers,
  users: userReducers,
  created_grievances: grievanceReducers
});

export default rootReducer;
