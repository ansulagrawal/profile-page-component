import { UPDATE_INPUT } from './action-types';

export function updateInput({ name, val }) {
   return (dispatch) => {
      dispatch({ type: UPDATE_INPUT, payload: { name, val } });
   };
}
