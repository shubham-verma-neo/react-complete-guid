import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [enteredUsers, setEnteredUsers] = useState('')
  const addUserHandler = (User) => {
    console.log(User)
    // console.log(enteredAge)
    setEnteredUsers((prev) => {
      return [User, ...prev];
    })
  }

  return (
    <div>
      <AddUser onAddUsers={addUserHandler} />
      <UsersList users={enteredUsers} />
    </div>
  );
}

export default App;
