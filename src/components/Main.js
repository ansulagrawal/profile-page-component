import React, { Component } from 'react';
import Navbar from './Navbar';
import Profile from './Profile';

export class Main extends Component {
   render() {
      // console.log(this.state.userdata);
      return (
         <>
            <Navbar />
            <Profile />
         </>
      );
   }
}

export default Main;
