import React, { Component } from 'react';
import EdiText from 'react-editext';
import { connect } from 'react-redux';
import './UserDetails.css';
import { actions } from '../state/index';

export class UserDetails extends Component {
   onSelect = (e) => {
      e.preventDefault();
      this.props.setUserdata({
         ...this.props.userdata,
         gender: e.target.value,
      });
   };

   update(name, val) {
      actions.updateInput(name, val);
      console.log(this.props.user);
   }
   render() {
      let { user } = this.props;
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
                        value={user.fname}
                        onSave={(val) => {
                           this.update('fname', val);
                        }}
                     />
                  </div>
                  <div className='col-md-6'>
                     <label className='labels'>Email</label>
                     <EdiText
                        type='text'
                        value={user.email}
                        onSave={(v) => {
                           this.update('email', v);
                        }}
                     />
                  </div>
               </div>
               <div className='row mt-3'>
                  <div className='col-md-12'>
                     <label className='labels'>Address</label>
                     <EdiText
                        type='text'
                        value={user.address}
                        onSave={(v) => {
                           this.update('address', v);
                        }}
                     />
                  </div>
               </div>
               <div className='row mt-3'>
                  <div className='col-md-6'>
                     <label className='labels'>City</label>
                     <EdiText
                        type='text'
                        value={user.city}
                        onSave={(v) => {
                           this.update('city', v);
                        }}
                     />
                  </div>
                  <div className='col-md-6'>
                     <label className='labels'>State</label>
                     <EdiText
                        type='text'
                        value={user.state}
                        onSave={(v) => {
                           this.update('state', v);
                        }}
                     />
                  </div>
               </div>
               <div className='row mt-3'>
                  <div className='col-md-6'>
                     <label className='labels'>Country</label>
                     <EdiText
                        type='text'
                        value={user.country}
                        onSave={(v) => {
                           this.update('country', v);
                        }}
                     />
                  </div>
                  <div className='col-md-6'>
                     <label className='labels'>Postal Code</label>
                     <EdiText
                        type='text'
                        value={user.postalcode}
                        onSave={(v) => {
                           this.update('postalcode', v);
                        }}
                     />
                  </div>
               </div>
               <div className='row mt-3'>
                  <div className='col-md-6'>
                     <label className='labels'>Mobile No</label>
                     <EdiText
                        type='text'
                        value={user.mobile}
                        onSave={(v) => {
                           this.update('mobile', v);
                        }}
                     />
                  </div>
                  <div className='col-md-6'>
                     <label className='labels'>Intrest</label>
                     <EdiText
                        type='text'
                        value={user.intrest}
                        onSave={(v) => {
                           this.update('intrest', v);
                        }}
                     />
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

const mapStateToProps = (state) => ({
   user: state.user,
});
const mapDispatchToProps = (dispatch) => ({
   actions: (name, val) => dispatch(actions.updateInput(name, val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
