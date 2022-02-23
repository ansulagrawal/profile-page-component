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
                           this.props.updateInput('fname', val);
                        }}
                     />
                  </div>
                  <div className='col-md-6'>
                     <label className='labels'>Email</label>
                     <EdiText
                        type='text'
                        value={user.email}
                        onSave={(v) => {
                           this.props.updateInput('email', v);
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
                           this.props.updateInput('address', v);
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
                           this.props.updateInput('city', v);
                        }}
                     />
                  </div>
                  <div className='col-md-6'>
                     <label className='labels'>State</label>
                     <EdiText
                        type='text'
                        value={user.state}
                        onSave={(v) => {
                           this.props.updateInput('state', v);
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
                           this.props.updateInput('country', v);
                        }}
                     />
                  </div>
                  <div className='col-md-6'>
                     <label className='labels'>Postal Code</label>
                     <EdiText
                        type='text'
                        value={user.postalcode}
                        onSave={(v) => {
                           this.props.updateInput('postalcode', v);
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
                           this.props.updateInput('mobile', v);
                        }}
                     />
                  </div>
                  <div className='col-md-6'>
                     <label className='labels'>Intrest</label>
                     <EdiText
                        type='text'
                        value={user.intrest}
                        onSave={(v) => {
                           this.props.updateInput('intrest', v);
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
const mapDispatchToProps = {
   updateInput: actions.updateInput,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
