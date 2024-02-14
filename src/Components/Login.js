import React, {useEffect, useState} from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom';

function Login() {
    const customNavigate = useNavigate();
    const loginData = JSON.parse(localStorage.getItem('formData'));

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    useEffect(() => {
      let isLogged = localStorage.getItem('loggedIn');
      if(isLogged) {
        customNavigate('/User')
      }else{
        isLogged = false;
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const handleOnChange = (event) =>{
        setFormData({...formData, [event.target.name] : event.target.value})
    }
    const handleOnSubmit = (e) =>{
        e.preventDefault()
        if(loginData){
            if(formData.email===loginData.email && formData.password === loginData.password){
              localStorage.setItem('loggedIn',true)
              customNavigate('/User')
            }
            else{
              alert("Invalid Credentials")
            }
        }
        else{
            customNavigate('/Welcome')
        }
    }
  
  return (
    <div className="popx-form">
      <div className="welcome-message text-primary">Create your PopX account</div>
      <form onSubmit={(e)=>handleOnSubmit(e)}>
        <div className="form-floating mb-3 text-primary">
          <input type="email" className="form-control" name='email' value={formData.email} onChange={(e)=>handleOnChange(e)} id="floatingInput3" placeholder="name@example.com" />
          <label htmlFor="floatingInput3">Email address</label>
        </div>
        <div className="form-floating mb-3 text-primary">
          <input type="password" className="form-control" name='password' value={formData.password} onChange={(e)=>handleOnChange(e)} id="floatingPassword" placeholder="Password" />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button type="submit" className="btn btn-lg w-100 bg-primary text-white rounded-pill mt-3">Login</button>
      </form>
    </div>
  );
}

export default Login;