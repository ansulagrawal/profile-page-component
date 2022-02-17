import React, { Component } from 'react';
import Navbar from './Navbar';
import Profile from './Profile';

export class Main extends Component {
   constructor() {
      super();
      this.state = {
         userdata: {
            fname: 'Ansul Agrawal',
            email: 'ansul@gmail.com',
            address: 'Kabilpore',
            city: 'Navsari',
            state: 'Gujarat',
            country: 'India',
            postalcode: '396427',
            mobile: '8866776740',
            intrest: 'Study, Travel, Read',
         },
      };
   }
   setUserdata = (val, value) => {
      this.setState({
         ...this.state,
         userdata: { ...this.state.userdata, [val]: value },
      });
   };
   render() {
      console.log(this.state.userdata);
      return (
         <>
            <Navbar />
            <Profile
               userdata={this.state.userdata}
               setUserdata={this.setUserdata}
            />
         </>
      );
   }
}

export default Main;
