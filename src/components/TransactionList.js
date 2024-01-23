import React from 'react';
import { useSelector } from 'react-redux';

const TransactionList = () => {
  const transactions = useSelector((state) => state.transactions);

  return (
    <div id="transaction-history-container">
      <h2>Transaction History</h2>
      <ul>
        {transactions && transactions.map((transaction, index) => (
          <li key={index}>
            {`Time: ${transaction.time}, From: ${transaction.from}, To: ${transaction.to}, Amount: ₦${transaction.amount}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;