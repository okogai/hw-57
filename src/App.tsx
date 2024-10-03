import React, { useState } from "react";
import UserForm from "./components/UserForm/UserForm.tsx";
import { IUser } from "./types";
import Users from './components/User/Users.tsx';

const App: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  const addNewUser = (newUser: IUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center gap-3">
        <div className="col-md-4">
          <UserForm addNewUser={addNewUser} />
        </div>
        <div className="col-md-4">
          <Users users={users} />
        </div>
      </div>
    </div>
  );
};

export default App;