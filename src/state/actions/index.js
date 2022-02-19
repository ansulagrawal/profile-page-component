import { UPDATE_INPUT } from './action-types';

export function updateInput(name, value) {
   console.log('updateInput', name, value);
   return (dispatch) => {
      dispatch({ type: UPDATE_INPUT, payload: { name, value } });
   };
}
