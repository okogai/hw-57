import React, { useState } from "react";
import { IUser, IUserMutation } from "../../types";

interface Props {
  addNewUser: (newUser: IUser) => void;
}

const UserForm: React.FC<Props> = ({ addNewUser }) => {
  const [newUser, setNewUser] = useState<IUserMutation>({
    id: '',
    name: "",
    email: "",
    active: false,
    role: "",
  });

const changeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser((prevState) => ({
      ...prevState,
      [e.target.name]:
        e.target.type === "checkbox"
          ? e.target.checked
          : e.target.value,
    }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (newUser.name.trim().length === 0 || newUser.email.trim().length === 0 || newUser.role.trim().length === 0) {
      alert("Заполните все поля!");
      return;
    }

    addNewUser({
      ...newUser,
      id: String(new Date().getTime()),
    });
    setNewUser({
      id: '',
      name: '',
      email: '',
      active: false,
      role: '',
    });
  };

  return (
    <div>
      <h3>Add new user</h3>
      <form onSubmit={onSubmit}>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={newUser.name}
            onChange={changeUser}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={newUser.email}
            onChange={changeUser}
          />
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="active"
            name="active"
            checked={newUser.active}
            onChange={changeUser}
          />
          <label htmlFor="active" className="form-check-label">
            Active
          </label>
        </div>

        <div className="mb-3">
          <label htmlFor="role" className="form-label">Role</label>
          <select
            id="role"
            name="role"
            className="form-select"
            value={newUser.role}
            onChange={changeUser}
          >
            <option value="" disabled>Выберите роль</option>
            <option value="user">User</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Add User
        </button>
      </form>
    </div>
  );
};

export default UserForm;
