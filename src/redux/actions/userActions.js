

export const login = (user) => ({
  type: 'LOGIN',
  payload: user,
});

export const logout = () => ({
  type: 'LOGOUT',
});

export const deleteUser = (username) => ({
  type: 'DELETE_USER',
  payload: username,
});

export const updateUsers = (users) => {
  console.log(users)
  return async (dispatch) => {
    dispatch({
      type: 'UPDATE_USERS',
      payload: users,
    })
  }
};

export const updateUser = (user) => {
  return async (dispatch) => {
    dispatch({
      type: 'UPDATE_USER',
      payload: user,
    })
  }
};