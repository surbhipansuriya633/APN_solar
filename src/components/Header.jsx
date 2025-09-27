import React from 'react';

export default function Header() {
  return (
    <header className="header container justify-content-md-between justify-content-center">
      <div className="logo text-md-center">
        <img
          src={require('../assets/logo.jpg')}
          alt="Logo"
          style={{ height: '80px', width: 'auto' }} // optional styling
        />
      </div>
      <nav className="nav d-md-block d-none">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#WhoWe">WhoWe</a>
        <a href="#process">Process</a>
        <a href="#team">Team</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
