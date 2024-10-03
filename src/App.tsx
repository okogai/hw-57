import { useState } from "react";
import "./App.css";
import UserForm from "./components/UserForm/UserForm.tsx";
import { IUser } from "./types";

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  const addNewUser = (newUser: IUser) => {
    setUsers((prevState) => [...prevState, newUser]);
  };

  return (
    <>
      <UserForm addNewUser={addNewUser} />
    </>
  );
};

export default App;
