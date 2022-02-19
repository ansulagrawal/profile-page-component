import { combineReducers } from 'redux';
import handleUpdateReducer from './handleUpdateReducer';

const reducers = combineReducers({
   user: handleUpdateReducer,
});

export default reducers;
