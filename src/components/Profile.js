import React, { Component } from 'react';
import UserProfile from './UserProfile';
import UserDetails from './UserDetails';
export class Profile extends Component {
   render() {
      return (
         <>
            <UserProfile />
            <UserDetails />
         </>
      );
   }
}

export default Profile;
