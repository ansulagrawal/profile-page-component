import React, { Component } from 'react';
import UserProfile from './UserProfile';
import UserDetails from './UserDetails';
export class Profile extends Component {
   render() {
      let { userdata, setUserdata } = this.props;
      return (
         <>
            <UserProfile userdata={userdata} />
            <UserDetails userdata={userdata} setUserdata={setUserdata} />
         </>
      );
   }
}

export default Profile;
