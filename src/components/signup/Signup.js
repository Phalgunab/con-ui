import React, { useState } from 'react';
import './signup.css'
function onSignupSubmit(){
  console.log("Submitted")
}

const formDataa = {
  firstName:'',
  lastName:'',
  email:'',
  password:'',
  confirmPassword:''
}

function Signup() {
  const [user, setUser] = useState({});
  const [formErrors, setFormErrors] = useState({});

  return (
    <div className='signup-main-div'>
      <h3>New User Registration Form</h3>
      <form onSubmit={onSignupSubmit()}>
        <div>
          <input
            className='form-control'
            placeholder='First Name'
            type='text'
            name='firstName'
            noValidate
          />
        </div>
        <div>
          <input
            className='form-control'
            placeholder='Last Name'
            type='text'
            name='lastName'
            noValidate
          />
        </div>
        <div>
          <input
            className='form-control'
            placeholder='Email'
            type='email'
            name='email'
            noValidate
          />
        </div>
        <div>
          <input
            className='form-control'
            placeholder='Password'
            type='password'
            name='password'
            noValidate
          />
        </div>
        <div>
          <input
            className='form-control'
            placeholder='Password'
            type='password'
            name='confirmpassword'
            noValidate
          />
        </div>
        <div>
          <button type='submit'>Create Account</button>
        </div>
      </form>
    </div>
  );

}

export default Signup   