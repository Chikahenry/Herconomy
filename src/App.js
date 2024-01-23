import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="login" element={<Login />} />
        <Route exact path="dashboard" element={<Dashboard/>} />
        <Route element={<NotFound />}/>
      </Routes>
    </Router>
  );
};

export default App;