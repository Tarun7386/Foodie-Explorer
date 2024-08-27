import React, { useState, useEffect } from "react";
import './sheetcss1/UserList.css'
const UserList = ({ user }) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://foodie-explorer-deploy.vercel.app/user/users_list"); // Ensure the URL is correct
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="user_list">
      
      <div className="ul_div">
        <ul>
          <p className="name_users">Users</p>
          {users.map((user, index) => (
            <li key={user.id || index}>{user.username}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserList;
