import { combineReducers } from 'redux';
import handleUpdateReducer from './handleUpdateReducer';

const reducer = combineReducers({
   user: handleUpdateReducer,
});

export default reducer;
