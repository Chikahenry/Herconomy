export const users = [
    { username: 'Admin Admin', password: 'admin', accountNumber: "123456", balance: 89000, userType: 'admin' },
    { username: 'Chika Herconomy', password: 'password1', accountNumber: "567890", balance: 1000, userType: 'ordinaryUser' },
    { username: 'Henry Herconomy', password: 'password2', accountNumber: "345678", balance: 500, userType: 'ordinaryUser' },
  ];
  
  export const transactions = [];
  
  export const updateUsers = (updatedUsers) => {
    users.length = 0;
    Array.prototype.push.apply(users, updatedUsers);
  };