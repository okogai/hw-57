import React from 'react';
import { IUser } from "../../types";
import UserItem from './UserItem';

interface Props {
  users: IUser[];
}

const Users: React.FC<Props> = ({ users }) => {
  return (
    <div>
      <h3>User List</h3>
      {users.length > 0 ? (
        <ul className="list-group">
          {users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </ul>
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
};

export default Users;
