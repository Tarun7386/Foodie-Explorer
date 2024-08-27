import React, { useState, useEffect } from "react";
import './sheetcss1/CollectReg.css'
const CollectRegistrations = () => {
  const [registrations, setRegistrations] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data when component mounts
    const fetchRegistrations = async () => {
      try {
        const response = await fetch(
          "https://foodie-explorer-deploy.vercel.app/registrations/collect_registrations"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setRegistrations(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchRegistrations();
  }, []);

  return (
    <div className="collect_reg">
      <h2>Registrations List</h2>
      {error && <p className="error">{error}</p>}
      {registrations.length === 0 ? (
        <p>No registrations found</p>
      ) : (
        <ul>
          {registrations.map((registration) => (
            <li key={registration._id}>
              <strong>Name:</strong> {registration.name}
              <br />
              <strong>Email:</strong> {registration.email}
              <br />
              <strong>Mobile:</strong> {registration.mobile}
              <br />
              <strong>Address:</strong> {registration.address}
              <br />
              <strong>Description:</strong> {registration.description}
              <br />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CollectRegistrations;
