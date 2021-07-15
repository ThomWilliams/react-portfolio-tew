import React from 'react';
import './navigation.css'


function Navigation() {
  const linkStyle = { border: '1px black', padding: '5px' };

  return (
    <nav className="navbar">
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
          <a href="/">Home</a>
        </div>
        <div style={linkStyle}>
          <a href="/portfolio">Portfolio</a>
        </div>
        <div style={linkStyle}>
          <a href="/contact">Contact</a>
        </div>
        <div style={linkStyle}>
          <a href="/cv">CV</a>
        </div>
      </section>
    </nav>
  );

}

export default Navigation;