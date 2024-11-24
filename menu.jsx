// menu.jsx
import React from 'react';
import './menu.css'; // สไตล์ของเมนู

const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Menu;
