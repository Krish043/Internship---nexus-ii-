import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signup.css';
import gif from './assets/gif.gif'

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isVisible, setIsVisible] = useState(true); // State to control visibility
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple form validation
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    axios.post('http://localhost:3001/login', { email, password })
      .then(result => {
        console.log(result);
        if (result.data === "Success") {
          onLogin(); // Call onLogin callback to update isLoggedIn state in Main component
          navigate('/home');
        } else {
          setError('Invalid email or password.');
        }
      })
      .catch(err => console.log(err));
  };

  const handleClose = () => {
    navigate('/')
    setIsVisible(false); // Set visibility to false to hide the component
  };

  return (
    <>
      {isVisible && ( // Render only if isVisible is true
        <div className="regContainer">
          <button className="close-button" onClick={handleClose}>×</button> {/* Close button */}
          <h2><b><u>Login</u></b> </h2>
          <div className="lr">
          <form onSubmit={handleSubmit}>
            <label htmlFor="email"><strong>Email</strong></label>
            <input type="email" placeholder="Enter Email" autoComplete="off" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="password"><strong>Password</strong></label>
            <input type="password" placeholder="Enter Password" autoComplete="off" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {error && <p className="error-message">{error}</p>}
            <button type="submit">Login</button>
          </form>
              <div className="lft">
                <img src={gif} id="gif" />
                Log in to flavour fusion for quick reservations, special offers, and a personalized experience!              </div>
          </div>
          <p>Don't Have an Account?</p>
          <Link to='/register'>Sign Up</Link>
        </div>
      )}
    </>
  );
}

export default Login;
