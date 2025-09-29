import React from 'react';

export default function Header() {
  return (
    <header className="header container justify-content-md-between justify-content-center">
      <div className="logo text-md-center">
        <img
          src={require('../assets/logo.jpg')}
          alt="Logo"
          style={{ height: '70px', width: 'auto' }} // optional styling
        />
      </div>
      <nav className="nav d-md-block d-none">
        <a className='fw-bold text-dark text-uppercase' style={{fontSize:'13px'}} href="#about">About</a>
        <a className='fw-bold text-dark text-uppercase' style={{fontSize:'13px'}} href="#WhoWe">WhoWe</a>
        <a className='fw-bold text-dark text-uppercase' style={{fontSize:'13px'}} href="#services">Services</a>
        <a className='fw-bold text-dark text-uppercase' style={{fontSize:'13px'}} href="#process">Process</a>
        <a className='fw-bold text-dark text-uppercase' style={{fontSize:'13px'}} href="#team">Team</a>
        <a className='fw-bold text-dark text-uppercase' style={{fontSize:'13px'}} href="#contact">Contact</a>
      </nav>
    </header>
  );
}
