

import React, { useState } from "react";


const UserRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    description: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { name, email, mobile, address, description } = formData;
    let errors = {};
    let isValid = true;

    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Regular expression for phone number validation (10 digits)
    const mobileRegex = /^\d{10}$/;

    if (!emailRegex.test(email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!mobileRegex.test(mobile)) {
      errors.mobile = "Please enter a valid 10-digit mobile number";
      isValid = false;
    }

    if (!name || !email || !mobile || !address || !description) {
      errors.general = "All fields are required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch(
          "https://foodie-explorer-deploy.vercel.app/registrations/user_register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        const result = await response.json();
        if (response.ok) {
          alert("Form submitted successfully!");
          setFormData({
            name: "",
            email: "",
            mobile: "",
            address: "",
            description: "",
          });
          setErrors({});
        } else {
          
          setErrors({ general: result.message });
        }
      } catch (error) {
        setErrors({ general: "An error occurred. Please try again later." });
      }
    }
  };

  return (
    <div className="container">
      <h2>Registration Form</h2>
      <form id="registrationForm">
        <label htmlFor="name" style={{ color: "yellow" }}>
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <label htmlFor="email" style={{ color: "rgb(73, 238, 73)" }}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <label htmlFor="mobile" style={{ color: "red" }}>
          Mobile No
        </label>
        <input
          type="tel"
          id="mobile"
          name="mobile"
          pattern="[0-9]{10}"
          value={formData.mobile}
          onChange={handleChange}
          required
        />
        {errors.mobile && <p className="error">{errors.mobile}</p>}

        <label htmlFor="address" style={{ color: "rgb(15, 211, 250)" }}>
          Address
        </label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        ></textarea>

        <label htmlFor="description" style={{ color: "wheat" }}>
          Why do you want to be an explorer?
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
        <button onClick={handleSubmit} type="button">
          submit
        </button>
        {/* <input type="submit" value="Submit" /> */}
        {errors.general && <p className="error">{errors.general}</p>}
      </form>
    </div>
  );
};

export default UserRegister;
