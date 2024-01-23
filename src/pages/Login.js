import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/userActions';
import { Navigate } from 'react-router-dom';
import { users } from '../mockData';

const Login = () => {
  const dispatch = useDispatch();
  const [accountNumber, setAccountNumber] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const handleLogin = () => {
    const user = users.find((u) => u.accountNumber === accountNumber && u.password === password);

    if (user) {
      dispatch(login(user));
      setRedirect(true);
    } else {
      alert('Invalid credentials');
    }
  };

  if (redirect) {
    return <Navigate  to="/dashboard" />;
  }

  return (
    <div class="login">
      <h1>Login</h1>
      <label>
        Account Number:
        <input type="text" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button className='login-btn' onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;