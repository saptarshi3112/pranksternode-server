import { combineReducers } from 'redux';

import { callReducer } from './callReducer';

export default combineReducers({
  call: callReducer
});
