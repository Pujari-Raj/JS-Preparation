import React, { useState } from "react";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit called");
    let formErrors = {};

    // regex validatn & required fields
    if (!formData.username.trim()) {
      formErrors.username = "username is required";
    } else {
      const usernameRegex = /^[a-zA-Z0-9]+$/;
      if (!usernameRegex.test(formData.username.trim())) {
        formErrors.username = "Invalid username";
      }
    }

    if (!formData.email.trim()) {
      formErrors.email = "email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        formErrors.email = "Invalid email";
      }
    }

    if (!formData.password.trim()) {
      formErrors.password = "password is required";
    } else {
      const passwordRegex =
        /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      if (!passwordRegex.test(formData.password.trim())) {
        formErrors.password = "Wrong Format For Password";
      }
    }

    setErrors(formErrors);
  };

  return (
    <>
      {/*  */}
      <div className="container">
        <div className="Signup-form">
          <form action="" onSubmit={handleSubmit}>
            <h1 className="title">SignUp Form</h1>
            <div className="inputContainer">
              <input
                className="input"
                type="text"
                name="username"
                id="username"
                placeholder=""
                value={formData.username}
                onChange={handleInputChange}
              />
              <label className="label" htmlFor="username">
                Username
              </label>
              {errors.username && (
                <span className="error-text">{errors.username}</span>
              )}
            </div>
            <div className="inputContainer">
              <input
                className="input"
                type="email"
                name="email"
                id="email"
                placeholder=""
                value={formData.email}
                onChange={handleInputChange}
              />
              <label className="label" htmlFor="email">
                Email
              </label>
              {errors.email && (
                <span className="error-text">{errors.email}</span>
              )}
            </div>
            <div className="inputContainer">
              <input
                className="input"
                type="password"
                name="password"
                id="password"
                placeholder=""
                value={formData.password}
                onChange={handleInputChange}
              />
              <label className="label" htmlFor="password">
                Password
              </label>
              {errors.password && (
                <span className="error-text">{errors.password}</span>
              )}
            </div>
            <button type="submit" className="submit-btn">
              Signup
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
