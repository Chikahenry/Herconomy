import { users } from '../../mockData';

const initialState = {
    users
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'DELETE_USER':
        return { ...state, users: action.payload };
      case 'UPDATE_USERS':
        return { ...state, users: action.payload };
      default:
        return state;
    }
  };
  
  export default usersReducer;