import React from 'react';
import ActiveUsersListItem  from './ActiveUsersListItem';
import './ActiveUsersList.css';

const activeUsers = [
  {
    socketId: 321,
    username: 'Paul',
  },
  {
    socketId: 333,
    username: 'Oliver',
  },
  {
    socketId: 432,
    username: 'Joaquin',
  },
];
const ActiveUsersList = () => {
  return (
    <div className="active_user_list_container">
      {activeUsers.map((activeUser) => (
        <ActiveUsersListItem
          key={activeUser.socketId}
          activeUser={activeUser}
        />
      ))}
    </div>
  );
};

export default ActiveUsersList;
