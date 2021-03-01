import React, { useState } from 'react';

const RegisterForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <React.Fragment>
      <h2>New User ?</h2>
      <h4>Create an account</h4>
      <br />

      <form noValidate>
        <div className='form-group'>
          <label htmlFor='firstName'>First Name</label>
          <input
            noValidate
            id='firstName'
            type='text'
            name='firstName'
            placeholder='First Name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='lastName'>Last Name</label>
          <input
            noValidate
            id='lastName'
            type='text'
            name='lastName'
            placeholder='Last Name'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email1'>Email address</label>
          <input
            noValidate
            id='email1'
            type='email'
            name='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='form-control'
          />
        </div>
        <div className='form-group'>
          {' '}
          <label htmlFor='password1'>Password</label>
          <input
            noValidate
            id='password1'
            type='password'
            name='password'
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='form-control'
          />
        </div>

        <button type='submit' className='btn btn-primary mr-2'>
          Login | <i className='fas fa-user-plus' />
        </button>
        <button className='btn btn-outline-secondary'>
          Cancel | <i className='fas fa-times' />
        </button>
      </form>
    </React.Fragment>
  );
};

export default RegisterForm;
