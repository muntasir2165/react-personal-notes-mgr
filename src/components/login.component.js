import React, { useState } from 'react';
import { connect } from 'react-redux';

import { loginUser } from './../redux/actions/authActionCreators';

const LoginForm = ({ dispatchLoginAction }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatchLoginAction(
      email,
      password,
      () => console.log('Logged in successfully!'),
      (message) => console.log(`Error: ${message}`)
    );
  };

  return (
    <React.Fragment>
      <h2>Have an account ?</h2>
      <h4>Login here</h4>
      <br />

      <form noValidate onSubmit={handleOnSubmit}>
        <div className='form-group'>
          <label htmlFor='email'>Email address</label>
          <input
            noValidate
            id='email'
            type='email'
            name='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            noValidate
            id='password'
            type='password'
            name='password'
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='form-control'
          />
        </div>

        <button type='submit' className='btn btn-primary mr-2'>
          Login | <i className='fas fa-sign-in-alt' />
        </button>
        <button className='btn btn-outline-secondary'>
          Cancel | <i className='fas fa-times' />
        </button>
      </form>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatchLoginAction: (email, password, onSuccess, onError) =>
    dispatch(loginUser({ email, password }, onSuccess, onError)),
});

export default connect(null, mapDispatchToProps)(LoginForm);
