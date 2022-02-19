import React, { Component } from 'react';
import { connect } from 'react-redux';
import './UserProfile.css';

export class UserProfile extends Component {
   render() {
      let { user } = this.props;
      return (
         <div className='user-profile-card'>
            <img
               src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
               alt='User Profile'
            />
            <div className='details'>
               <div className='name'>Name: {user.fname}</div>
               <div className='email'>Email: {user.email}</div>
               <div className='otherdetails'>
                  Mobile No: {user.mobile}
                  <br />
                  Address: {user.address}, {user.city}- {user.postalcode},{' '}
                  {user.state}, {user.country}
                  <br />
                  Intrest: {user.intrest}
               </div>
            </div>
         </div>
      );
   }
}

const mapStateToProps = (state) => ({
   user: state.user,
});
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
