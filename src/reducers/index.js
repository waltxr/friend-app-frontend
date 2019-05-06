import { combineReducers } from 'redux';
import appReducers from './appReducers';
import userReducers from './userReducers';

const rootReducer = combineReducers({
  app: appReducers,
  users: userReducers,
});

export default rootReducer;
