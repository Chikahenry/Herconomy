import { createStore, applyMiddleware, combineReducers } from 'redux';
import userReducer from '../redux/reducers/userReducer';
import usersReducer from '../redux/reducers/usersReducer';
import transactionReducer from '../redux/reducers/transactionReducer';
import {thunk} from 'redux-thunk';

const rootReducer = combineReducers({
  user: userReducer,
  users: usersReducer,
  transactions: transactionReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
