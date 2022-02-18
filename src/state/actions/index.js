import {
   UPDATE_NAME,
   UPDATE_EMAIL,
   UPDATE_DOB,
   UPDATE_ADDRESS,
   UPDATE_CITY,
   UPDATE_STATE,
   UPDATE_COUNTRY,
   UPDATE_POSTALCODE,
   UPDATE_MOBILE,
   UPDATE_INTEREST,
} from './action-types';

export function updateName({ value }) {
   return { type: UPDATE_NAME, payload: value };
}
export function updateEmail({ value }) {
   return { type: UPDATE_EMAIL, payload: value };
}
export function updateDob({ value }) {
   return { type: UPDATE_DOB, payload: value };
}
export function updateAddress({ value }) {
   return { type: UPDATE_ADDRESS, payload: value };
}
export function updateCity({ value }) {
   return { type: UPDATE_CITY, payload: value };
}
export function updateState({ value }) {
   return { type: UPDATE_STATE, payload: value };
}
export function updateCountry({ value }) {
   return { type: UPDATE_COUNTRY, payload: value };
}
export function updatePostalcode({ value }) {
   return { type: UPDATE_POSTALCODE, payload: value };
}
export function updateMobile({ value }) {
   return { type: UPDATE_MOBILE, payload: value };
}
export function updateInterest({ value }) {
   return { type: UPDATE_INTEREST, payload: value };
}
