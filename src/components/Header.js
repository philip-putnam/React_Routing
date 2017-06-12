import React from 'react';

const Header = () => (
  <header>
    <span className="icn-logo"><i className="material-icons">code</i></span>
    <ul className="main-nav">
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/teachers">Teachers</a></li>
      <li><a href="/courses">Courses</a></li>
    </ul>
  </header>
);

export default Header;
