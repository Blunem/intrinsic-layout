import React from 'react';
// import {useState} from 'react';

import { useField } from "../../hooks/useField";
import { Form, InputContainer, SubmitButton} from './StyleLoginForm';


// import timer from '../../utils/timer';

const LoginForm = () => {


  
  // const [error, setError] = useState('');
  const [username, resetUsername] = useField('text');
  const [password, resetPassword] = useField('password');

  const can = () => ((username.value && password.value) );
  const handleSubmit = async (event) => {
    event.preventDefault()
  
      
    resetUsername();
    resetPassword();
  }

  return (
        <Form space={ '1rem' } onSubmit={handleSubmit}>
            <h2>Login</h2>
            <InputContainer space = {'0.5rem'}>
              <label htmlFor = 'username'>Username</label>
              <input {...username} id = {'username'} placeholder = {'Username'} />
            </InputContainer>
            <InputContainer space = {'0.5rem'}>
              <label htmlFor = 'password'>Password</label>
              <input {...password} id = {'password'} placeholder = {'Password'} />
            </InputContainer>
            <SubmitButton  can = { can() } disabled ={ !can()} id='login-button' type='submit'>login</SubmitButton>  
        </Form>
  )
}
export default LoginForm

