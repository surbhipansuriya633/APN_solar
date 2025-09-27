import React from 'react';

export default function Header() {
  return (
    <header className="header container">
      <div className="logo">
        <img
          src={require('../assets/logo.jpg')}
          alt="Logo"
          style={{ height: '80px', width: 'auto' }} // optional styling
        />
      </div>
      <nav className="nav">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#process">Process</a>
        <a href="#team">Team</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
