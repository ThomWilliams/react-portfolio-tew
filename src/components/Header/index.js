import React from 'react';
import './header.css';


function Header() {
  const h1message = 'Thom Williams';
  const h2message = 'Porfolio Site';
  return (
    <header className="header">

      <h1>{h1message}</h1>
      <h2>{h2message}</h2>
    </header>
  );
}

export default Header;