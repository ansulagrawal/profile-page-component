const initialState = {
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

function handleUpdateReducer(state = initialState, action) {
   switch (action.type) {
      case 'UPDATE_INPUT':
         return {
            ...state,
            [action.payload.name]: action.payload.value,
         };
      default:
         return state;
   }
}

export default handleUpdateReducer;
