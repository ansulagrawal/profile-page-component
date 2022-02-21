import React, { Component } from 'react';
import EdiText from 'react-editext';
import './UserDetails.css';
export class UserDetails extends Component {
   // Validation
   validationhandler = (name, value) => {
      switch (name) {
         case 'email':
            let temp = new RegExp(
               /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g
            ).test(value);
            return temp;
         case 'fname':
            return value.length > 10;
         default:
            return false;
      }
   };

   onSelect = (e) => {
      e.preventDefault();
      this.props.setUserdata({
         ...this.props.userdata,
         gender: e.target.value,
      });
   };

   render() {
      let { userdata, setUserdata } = this.props;

      return (
         <div className='user-profile-details'>
            <div className='d-flex flex-column wrapper'>
               <div className='d-flex justify-content-center align-items-center mb-3'>
                  <h4 className='text-right'>Profile Details</h4>
               </div>
               <div className='row mt-3'>
                  <div className='col-md-6'>
                     <label className='labels'>Full Name</label>
                     <EdiText
                        type='text'
                        value={userdata.fname}
                        onSave={(val) => {
                           setUserdata('fname', val);
                        }}
                        validation={(val) => {
                           return this.validationhandler('fname', val);
                        }}
                        validationMessage='Please enter valid name with length greater than 10'
                     />
                  </div>
                  <div className='col-md-6'>
                     <label className='labels'>Email</label>
                     <EdiText
                        type='email'
                        validationMessage='Please enter a valid email address'
                        validation={(value) => {
                           return this.validationhandler('email', value);
                        }}
                        value={userdata.email}
                        onSave={(val) => {
                           setUserdata('email', val);
                        }}
                     />
                  </div>
               </div>
               <div className='row mt-3'>
                  <div className='col-md-6'>
                     <label className='labels'>Date of Birth</label>
                     <EdiText
                        type='date'
                        value={userdata.dob}
                        onSave={(val) => {
                           setUserdata('dob', val);
                        }}
                     />
                  </div>
                  <div className='col-md-6'>
                     <label className='labels'>Address</label>
                     <EdiText
                        type='text'
                        value={userdata.address}
                        onSave={(val) => {
                           setUserdata('address', val);
                        }}
                     />
                  </div>
               </div>
               <div className='row mt-3'>
                  <div className='col-md-6'>
                     <label className='labels'>City</label>
                     <EdiText
                        type='text'
                        value={userdata.city}
                        onSave={(val) => {
                           setUserdata('city', val);
                        }}
                     />
                  </div>
                  <div className='col-md-6'>
                     <label className='labels'>State</label>
                     <EdiText
                        type='text'
                        value={userdata.state}
                        onSave={(val) => {
                           setUserdata('state', val);
                        }}
                     />
                  </div>
               </div>
               <div className='row mt-3'>
                  <div className='col-md-6'>
                     <label className='labels'>Country</label>
                     <EdiText
                        type='text'
                        value={userdata.country}
                        onSave={(val) => {
                           setUserdata('country', val);
                        }}
                     />
                  </div>
                  <div className='col-md-6'>
                     <label className='labels'>Postal Code</label>
                     <EdiText
                        type='text'
                        value={userdata.postalcode}
                        onSave={(val) => {
                           setUserdata('postalcode', val);
                        }}
                     />
                  </div>
               </div>
               <div className='row mt-3'>
                  <div className='col-md-6'>
                     <label className='labels'>Mobile No</label>
                     <EdiText
                        type='text'
                        value={userdata.mobile}
                        onSave={(val) => {
                           setUserdata('mobile', val);
                        }}
                     />
                  </div>
                  <div className='col-md-6'>
                     <label className='labels'>Intrest</label>
                     <EdiText
                        type='text'
                        value={userdata.intrest}
                        onSave={(val) => {
                           setUserdata('intrest', val);
                        }}
                     />
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default UserDetails;
