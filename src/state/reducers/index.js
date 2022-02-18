import { combineReducers } from 'redux';
import dataReducers from './dataUpdateReducers';

const reducer = combineReducers({
   data: dataReducers,
});

export default reducer;
