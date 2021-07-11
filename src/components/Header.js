import React from 'react';

function Header() {
  const message = 'This is the Header';
  return (
    <div className="container">
      <h1>{message}</h1>
    </div>
  );
}

export default Header;