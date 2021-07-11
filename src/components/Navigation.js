import React from 'react';

function Navigation() {
  const linkStyle = { border: '1px black', padding: '5px' };

  return (
    <nav className="main-header-menu">
      <section
        style={{
          display: 'flex',
          fontFamily: 'helvetica',
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
        }}
      >
        <div style={linkStyle}>
          <a href="#">Home</a>
        </div>
        <div style={linkStyle}>
          <a href="#">Portfolio</a>
        </div>
        <div style={linkStyle}>
          <a href="#">Contact</a>
        </div>
        <div style={linkStyle}>
          <a href="#">CV</a>
        </div>
      </section>
    </nav>
  );
}

export default Navigation;