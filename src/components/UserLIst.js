import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUsers } from '../redux/actions/userActions';


const UserList = () => {
  const loginUser = useSelector((state) => state.user);
  const {users} = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleDelete = (accountNumber) => {
    if(loginUser.accountNumber === accountNumber){
        alert('Admin canot delete self.');
        return
    }
    if (loginUser.userType === 'admin' ) {
      dispatch(updateUsers(users.filter(user => user.accountNumber !== accountNumber)));
    } else {
      alert('Only admin users can delete users.');
    }
  };

  return (
    <div id="user-list-container">
      <h2>User List</h2>
      <ul>
        {users && users.map((user, index) => (
          <li key={index}>
            {"User Name: " + user.username +",   Balance: ₦"+ user.balance + ",   Account No:"+ user.accountNumber} 
            {loginUser.userType === 'admin' && (
              <button className='delete' onClick={() => handleDelete(user.accountNumber)}>Delete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;