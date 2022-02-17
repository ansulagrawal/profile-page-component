import React, { Component } from 'react';
import EdiText from 'react-editext';
import './UserDetails.css';

export class UserDetails extends Component {
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
                        onSave={(v) => {
                           setUserdata('fname', v);
                        }}
                     />
                  </div>
                  <div className='col-md-6'>
                     <label className='labels'>Email</label>
                     <EdiText
                        type='text'
                        value={userdata.email}
                        onSave={(v) => {
                           setUserdata('email', v);
                        }}
                     />
                  </div>
               </div>
               <div className='row mt-3'>
                  {/* <div className='col-md-6'>
                     <label className='labels'>Gender</label>
                     <select name='gender' id='gender' onSelect={this.onSelect}>
                        <option value='Male'>Male</option>
                        <option value='Fmale'>Female</option>
                        <option value='Other'>Other</option>
                     </select>
                  </div> */}
                  <div className='col-md-12'>
                     <label className='labels'>Address</label>
                     <EdiText
                        type='text'
                        value={userdata.address}
                        onSave={(v) => {
                           setUserdata('address', v);
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
                        onSave={(v) => {
                           setUserdata('city', v);
                        }}
                     />
                  </div>
                  <div className='col-md-6'>
                     <label className='labels'>State</label>
                     <EdiText
                        type='text'
                        value={userdata.state}
                        onSave={(v) => {
                           setUserdata('state', v);
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
                        onSave={(v) => {
                           setUserdata('country', v);
                        }}
                     />
                  </div>
                  <div className='col-md-6'>
                     <label className='labels'>Postal Code</label>
                     <EdiText
                        type='text'
                        value={userdata.postalcode}
                        onSave={(v) => {
                           setUserdata('postalcode', v);
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
                        onSave={(v) => {
                           setUserdata('mobile', v);
                        }}
                     />
                  </div>
                  <div className='col-md-6'>
                     <label className='labels'>Intrest</label>
                     <EdiText
                        type='text'
                        value={userdata.intrest}
                        onSave={(v) => {
                           setUserdata('intrest', v);
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
