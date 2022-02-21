import React, { Component } from 'react';
import Navbar from './Navbar';
import Profile from './Profile';

export class Main extends Component {
   constructor() {
      super();
      this.state = {
         userdata: {
            fname: 'Ansul Agrawal',
            email: 'ansul9@gmail.com',
            dob: new Date().toISOString().substr(0, 10),
            address: 'Kabilpore',
            city: 'Navsari',
            state: 'Gujarat',
            country: 'India',
            postalcode: 396427,
            mobile: 8866776740,
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
      const { userdata } = this.state;
      return (
         <>
            <Navbar />
            {console.log(userdata)}
            <Profile userdata={userdata} setUserdata={this.setUserdata} />
         </>
      );
   }
}

export default Main;
