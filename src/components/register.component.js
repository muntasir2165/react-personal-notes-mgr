import React, { useState } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import { registerUser } from '../redux/actions/authActionCreators';

const RegisterForm = ({ dispatchRegisterAction }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (isFormInvalid()) {
      updateErrorFlags();
    } else {
      dispatchRegisterAction(
        firstName,
        lastName,
        email,
        password,
        () => toast.success('Account Created Successfully!'),
        (message) => toast.error(`Error: ${message}`)
      );
    }
  };

  const handleCancelForm = (event) => {
    event.preventDefault();
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setError({
      firstName: false,
      lastName: false,
      email: false,
      password: false,
    });
  };

  const isFormInvalid = () => !firstName || !lastName || !email || !password;

  const updateErrorFlags = () => {
    const errorObj = {
      firstName: false,
      lastName: false,
      email: false,
      password: false,
    };
    if (!firstName.trim()) errorObj.firstName = true;
    if (!lastName.trim()) errorObj.lastName = true;
    if (!email.trim()) errorObj.email = true;
    if (!password.trim()) errorObj.password = true;
    setError(errorObj);
  };

  return (
    <React.Fragment>
      <h2>New User ?</h2>
      <h4>Create an account</h4>
      <br />

      <form noValidate onSubmit={handleOnSubmit}>
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
            className={`form-control ${error.email ? 'is-invalid' : ''}`}
          />
          <p className='invalid-feedback'>Required</p>
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
            className={`form-control ${error.email ? 'is-invalid' : ''}`}
          />
          <p className='invalid-feedback'>Required</p>
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
            className={`form-control ${error.email ? 'is-invalid' : ''}`}
          />
          <p className='invalid-feedback'>Required</p>
        </div>
        <div className='form-group'>
          <label htmlFor='password1'>Password</label>
          <input
            noValidate
            id='password1'
            type='password'
            name='password'
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`form-control ${error.email ? 'is-invalid' : ''}`}
          />
          <p className='invalid-feedback'>Required</p>
        </div>

        <button type='submit' className='btn btn-primary mr-2'>
          Register | <i className='fas fa-user-plus' />
        </button>
        <button
          onClick={handleCancelForm}
          className='btn btn-outline-secondary'
        >
          Cancel | <i className='fas fa-times' />
        </button>
      </form>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatchRegisterAction: (
    firstName,
    lastName,
    email,
    password,
    onSuccess,
    onError
  ) =>
    dispatch(
      registerUser({ firstName, lastName, email, password }, onSuccess, onError)
    ),
});

export default connect(null, mapDispatchToProps)(RegisterForm);
