export const initialState = {
   fname: 'Ansul Agrawal',
   email: 'ansul@gmail.com',
   address: 'Kabilpore',
   city: 'Navsari',
   state: 'Gujarat',
   country: 'India',
   postalcode: '396427',
   mobile: '8866776740',
   intrest: 'Study, Travel, Read',
   dob: '',
};
export const handleInputUpdate = (
   state = initialState,
   { type, payload: { value } }
) => {
   switch (type) {
      case 'UPDATE_NAME':
         return { ...state, fname: value };
      case 'UPDATE_EMAIL':
         return { ...state, email: value };
      case 'UPDATE_ADDRESS':
         return { ...state, address: value };
      case 'UPDATE_CITY':
         return { ...state, city: value };
      case 'UPDATE_STATE':
         return { ...state, state: value };
      case 'UPDATE_COUNTRY':
         return { ...state, country: value };
      case 'UPDATE_POSTALCODE':
         return { ...state, postalcode: value };
      case 'UPDATE_MOBILE':
         return { ...state, mobile: value };
      case 'UPDATE_INTEREST':
         return { ...state, intrest: value };
      case 'UPDATE_DOB':
         return { ...state, dob: value };
      default:
         return state;
   }
};
