import React from 'react';
import './header.css';

function Header() {
  const message = 'This is the Header';
  return (
    <header className="header">
      <h1>{message}</h1>
    </header>
  );
}

export default Header;