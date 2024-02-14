import React from 'react';
import { Link } from 'react-router-dom';
import './welcome.css'

function Welcome() {
  return (
    <div className='main-container'>
      <div className='container'>
      <h1>Welcome to PopX</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <Link to='/Signup'><button id='create-account' className='create-account-button'>Create Account</button></Link>
      <Link to='/Login'><button id='login-account' className='create-account-button light-bg'>Already Registered? Login</button></Link>
      </div>
    </div>
  );
}

export default Welcome;