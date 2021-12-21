import { combineReducers } from 'redux';

import { connectReducer } from './connectReducer';

export const rootReducer = combineReducers({
  connectReducer,
});