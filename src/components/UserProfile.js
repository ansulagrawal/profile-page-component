import React, { Component } from 'react';
import './UserProfile.css';

export class UserProfile extends Component {
   render() {
      let { userdata } = this.props;
      return (
         <div className='user-profile-card'>
            <img
               src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
               alt='User Profile'
            />
            <div className='details'>
               <div className='name'>Name: {userdata.fname}</div>
               <div className='email'>Email: {userdata.email}</div>
               <div className='otherdetails'>
                  Mobile No: {userdata.mobile}
                  <br />
                  Address: {userdata.address}, {userdata.city}-{' '}
                  {userdata.postalcode}, {userdata.state}, {userdata.country}
                  <br />
                  Intrest: {userdata.intrest}
               </div>
            </div>
         </div>
      );
   }
}

export default UserProfile;
