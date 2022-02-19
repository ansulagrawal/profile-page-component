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
   console.log('handleUpdateReducer', action.value);
   console.log('state', state);
   switch (action.type) {
      case 'UPDATE_INPUT':
         return { ...state, [action.paylod.name]: action.paylod.value };
      default:
         return state;
   }
}

export default handleUpdateReducer;
