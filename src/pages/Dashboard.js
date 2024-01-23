import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Balance from '../components/Balance';
import TransactionList from '../components/TransactionList';
import TransferForm from '../components/TransferForm';
import UserList from '../components/UserLIst';
import { logout } from '../redux/actions/userActions'; 

const Dashboard = () => {

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div>

    <div className='dashboard-head'>
      <h1>Welcome, {user.username}!</h1>
      <button className='logout' onClick={handleLogout}>Logout</button>
    </div>
      <Balance />
      <TransactionList />
      {user.userType === 'admin' && <UserList />}
      <TransferForm />
    </div>
  );
};

export default Dashboard;