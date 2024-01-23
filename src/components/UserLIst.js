import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUsers } from '../redux/actions/userActions';


const UserList = () => {
  const loginUser = useSelector((state) => state.user);
  const {users} = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleDelete = (username) => {
    if (loginUser.userType === 'admin') {
      dispatch(updateUsers(users.filter(user => user.username.toLowerCase() !== username.toLowerCase())));
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
              <button className='delete' onClick={() => handleDelete(user.username)}>Delete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;