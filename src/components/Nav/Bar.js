import React from 'react';
import './Bar.css';
import { Link } from 'react-router-dom';

function Bar() {
  const navStyle = {
    color: 'white',
    textDecoration: 'none',
  };
  return (
    <nav>
      <h3>Logo</h3>
      <ul className='nav-links'>
        <Link to='/register' style={navStyle}>
          <li>Register</li>
        </Link>
        <Link to='login' style={navStyle}>
          <li>Login</li>
        </Link>
        <Link to='/upload' style={navStyle}>
          <li>Upload</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Bar;
