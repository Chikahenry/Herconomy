import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTransaction } from '../redux/actions/transactionActions';
import { updateUsers } from '../redux/actions/userActions';
import { updateUser } from '../redux/actions/userActions';

const TransferForm = () => {
    const {users} = useSelector((state) => state.users)
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user);
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState(0);

  const handleTransfer = () => {
    if (recipient === currentUser.accountNumber) {
        alert("You can't transfer money to yourself.");
        return;
      }
      let userExist = users.filter((user) => {
        if (user.accountNumber === recipient)
            return user
      })
    console.log(userExist)
    if(userExist.length === 0){
        alert('invalid account number');
    return
    }
    if (currentUser.balance >= amount) {
      // Update balances in memory
      const updatedUsers = users && users.map((user) => {

        if (user.accountNumber === currentUser.accountNumber) {
          return { ...user, balance: user.balance - Number(amount) };
        } else if (user.accountNumber === recipient) {
          return { ...user, balance: user.balance + Number(amount) };
        }
        return user;
      });

      // Update the state with the new user balances
      dispatch(updateUsers(updatedUsers));
      currentUser.balance -= amount;
      dispatch(updateUser(currentUser));

      // Record the transaction
      const transaction = {
        from: currentUser.username,
        to: userExist[0].username,
        amount,
        time: new Date().toLocaleString(),
      };

      // Dispatch the transaction to be added to the transaction history
      dispatch(addTransaction(transaction));
    } else {
      alert('Insufficient balance for the transfer.');
    }
  };

  return (
    <div id="transfer-form-container">
      <h2>Transfer Money</h2>
      <label>
        Recipient:
        <input type="text" value={recipient} onChange={(e) => setRecipient(e.target.value)} />
      </label>
      <br />
      <label>
        Amount:
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </label>
      <br />
      <button onClick={handleTransfer}>Transfer</button>
    </div>
  );
};

export default TransferForm;
