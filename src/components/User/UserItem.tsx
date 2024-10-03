import React from 'react';
import { IUser } from  "../../types";

interface Props {
  user: IUser;
}

const UserItem: React.FC<Props> = ({ user }) => {
  return (
    <li className="list-group-item mb-3 border rounded-2">
      <div><strong>Name:</strong> {user.name}</div>
      <div><strong>Email:</strong> {user.email}</div>
      <div><strong>Active:</strong> {user.active ? 'Yes' : 'No'}</div>
      <div><strong>Role:</strong> {user.role}</div>
    </li>
  );
};

export default UserItem;
