import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from './Components/Welcome'
import Signup from './Components/Signup'
import User from './Components/User';
import Login from './Components/Login';

const App = () => {
  const [loginData, setLoginData] = useState({
    // name: '',
    // phone: '',
    // email: '',
    // password: '',
    // companyName: '',
  })
  const signupSubmit =(formData) =>{
    setLoginData({...formData})
  }
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/Signup' element={<Signup loginData={loginData} signupSubmit={signupSubmit} />} />
          <Route path='/User' element={<User loginData={loginData} />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
      </BrowserRouter>
      {/* <Welcome /> */}
    </div>
  )
}

export default App;