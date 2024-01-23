import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/userActions';
import { Navigate } from 'react-router-dom';
import { users } from '../mockData';

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const handleLogin = () => {
    const user = users.find((u) => u.username.toLowerCase() === username.toLowerCase() && u.password === password);

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
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
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