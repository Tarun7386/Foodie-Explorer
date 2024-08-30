import React, { useState, useEffect } from "react";
import './sheetcss1/DeleteUser.css'
const DeactivateUser = () => {
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

  const deactivateUser = async (userId) => {
    try {
      const response = await fetch(
        `https://foodie-explorer-deploy.vercel.app/deactivateUser/deactivate_user/${userId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      alert("User deactivated successfully");
     
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="deactivate_div">
      
      {/* {error && <p className="error">{error}</p>} */}
      <div className="d_ul">
        <ul>
          <p className="d_user">Deactivate_Users</p>
          {users.map((user, index) => (
            <li key={user._id || index}>
              {user.username}
              <button onClick={() => deactivateUser(user._id)}>
                Deactivate
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DeactivateUser;
