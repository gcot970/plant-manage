import React, { useState } from "react";
import "./login.css";
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_PROFILE } from './utils/mutations.js';

import Auth from './utils/auth.js';

const SignupPage = (props) => {
  const [formState, setFormState] = useState({ name: '', username: '', email: '', password: '' });
  const [signup, { error, data }] = useMutation(ADD_PROFILE);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await signup({
        variables: { ...formState },
      });

      Auth.login(data.addProfile.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
    });
  };

  return (

    <div className="login-page">
      <div className="login-box"><h1>Plant Pal</h1>
        <div className="login-section">
          {data ? (
            <p>
              Success!
              <Link to="/">back to the homepage.</Link>
            </p>
          ) : (
            <form onSubmit={handleFormSubmit}>
                <input
                className="form-input"
                placeholder="Your name"
                name="name"
                type="text"
                value={formState.firstname}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="Your username"
                name="username"
                type="text"
                value={formState.username}
                onChange={handleChange}
              />

              <input
                className="form-input"
                placeholder="Your email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="******"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />
              <button
                className="button"
                style={{ cursor: 'pointer' }}
                type="submit"
              >
                Submit
              </button>
              <Link to="/profile">
                <button
                  className="button"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Plant Your Roots</button>
              </Link>
            </form>
          )}

          {error && (
            <div className="my-3 p-3 bg-danger text-white">
              {error.message}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SignupPage;
