import React, { Component } from 'react';
import './Navbar.css';

export class Navbar extends Component {
   render() {
      return (
         <>
            <nav>
               <div className='logo'>Profile</div>
               <div className='login'>
                  <a href='/login'>Login</a>
                  <a href='/signup'>Sign up</a>
               </div>
            </nav>
         </>
      );
   }
}

export default Navbar;
