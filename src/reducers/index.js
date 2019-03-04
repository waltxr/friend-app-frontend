import { combineReducers } from 'redux';
import authReducers from './authReducers';
import userReducers from './userReducers';

const rootReducer = combineReducers({
  auth: authReducers,
  users: userReducers
});

export default rootReducer;
