import React, { useEffect } from 'react';
import './User.css'
import userAvatar from '../assests/userAvatar.jpg'
import { useNavigate } from 'react-router-dom';

const User = ({loginData}) => {
  const customNavigate = useNavigate();
  // func for split long name into 2 words
  function truncateName (loginData){
    if(loginData && loginData.name){
      const name = loginData.name.trim().split(/\s+/); //regex expression for removing one or more whitespace characters
      if(name.length >2){
        loginData.name = name.slice(0,2).join(' ')
      }
    }
    return loginData;
  }
  // if we have fresh login data
  if(loginData && loginData.name){
    loginData = truncateName(loginData);
  }
  else { // if we have no fresh login data and user hit the user page anytime, after once the signing up
    loginData = JSON.parse(localStorage.getItem('formData'));
    loginData = truncateName(loginData);
  }
  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    customNavigate('/Login')
  }
  

  return(
    <div className="account-settings">
      <div className='heading'>Account Settings</div>
      <div className='userDetails'>
        <div className='userinfo'>
          <div className='userpic'>
            <img className='userphoto' src={userAvatar} alt="userAvatar" />
          </div>
          <div className='userdata'>
            <div className="account-settings__name">{loginData.name}</div>
            <div className="account-settings__email">{loginData.email}</div>
          </div>
        </div>
        <div className="account-settings__info">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.
        </div>
      </div>
      <button type="submit" onClick={handleLogout} className="btn btn-lg w-100 bg-primary text-white rounded-pill mt-3">Logout</button>
    </div>
  );
}

export default User;