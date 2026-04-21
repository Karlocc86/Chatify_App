import { useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Licuados Alets', status: 'offline' },
    { id: 2, name: 'Santi', status: 'offline' },
    { id: 3, name: 'Cam', status: 'online' },
    { id: 4, name: 'Karlo Kirk', status: 'online' }
  ]);

  return (
    <div className="users-list">
      <h3 className="title">Usuarios</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id} style={{ padding: '8px', listStyle: 'none' }}>
            <span style={{ 
              color: user.status === 'online' ? '#4ade80' : '#94a3b8' 
            }}>●</span> {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;