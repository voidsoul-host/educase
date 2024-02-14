import React, {useState} from 'react';
import './signup.css'
import { Link, Navigate, useNavigate } from 'react-router-dom';

function Signup({loginData, signupSubmit}) {
  const customNavigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    companyName: '',
  })
  
  const handleOnChange = (event) =>{
    setFormData({...formData, [event.target.name] : event.target.value})
  }
  const handleOnSubmit = (e) =>{
    e.preventDefault()
    signupSubmit(formData)
    console.log("input data", formData);
    console.log("login", loginData);
    localStorage.setItem("formData", JSON.stringify(formData));
    // navigate to /User
    customNavigate('/User')
    // customNavigate(``)
    // return <Navigate to="/User" />
  }
  
  return (
    <div className="popx-form">
      <div className="welcome-message text-primary">Create your PopX account</div>
      <form onSubmit={(e)=>handleOnSubmit(e)}>
        <div className="form-floating mb-3 text-primary">
          <input type="text" className="form-control" name='name' value={formData.name} onChange={(e)=>handleOnChange(e)} id="floatingInput1" placeholder="Marry Doe" />
          <label htmlFor="floatingInput1">Full Name</label>
        </div>
        <div className="form-floating mb-3 text-primary">
          <input type="number" className="form-control" name='phone' value={formData.phone} onChange={(e)=>handleOnChange(e)} id="floatingInput2" placeholder="1234567890" />
          <label htmlFor="floatingInput2">Phone Number</label>
        </div>
        <div className="form-floating mb-3 text-primary">
          <input type="email" className="form-control" name='email' value={formData.email} onChange={(e)=>handleOnChange(e)} id="floatingInput3" placeholder="name@example.com" />
          <label htmlFor="floatingInput3">Email address</label>
        </div>
        <div className="form-floating mb-3 text-primary">
          <input type="password" className="form-control" name='password' value={formData.password} onChange={(e)=>handleOnChange(e)} id="floatingPassword" placeholder="Password" />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="form-floating mb-3 text-primary">
          <input type="text" className="form-control" name='companyName' value={formData.companyName} onChange={(e)=>handleOnChange(e)} id="floatingInput4" placeholder="XYZ Pvt. Ltd." />
          <label htmlFor="floatingInput4">Company Name</label>
        </div>
        <p>Are you an agency?</p>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="agency" id="flexRadioDefault1" />
          <label className="form-check-label" htmlFor="flexRadioDefault1">Yes</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="agency" id="flexRadioDefault2" />
          <label className="form-check-label" htmlFor="flexRadioDefault2">No</label>
        </div>
        <button type="submit" className="btn btn-lg w-100 bg-primary text-white rounded-pill mt-3">Create Account</button>
      </form>
    </div>
  );
}

export default Signup;