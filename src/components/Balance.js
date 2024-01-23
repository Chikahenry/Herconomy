import React from 'react';
import { useSelector } from 'react-redux';

const Balance = () => {
  const user = useSelector((state) => state.user);

  return (
    <div id="balance-container">
      <h2>Account Balance: {user ? `₦${user.balance}` : 'N/A'}</h2>
    </div>
  );
};

export default Balance;