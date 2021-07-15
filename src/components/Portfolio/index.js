import React from 'react';
import './portfolio.css';
import Display from './display.js';

function Portfolio() {
  const message = 'This is the Portfolios Component';
  return (
    <section className="content-container">
      <h2>{message}</h2>
      <Display />
      <div>Card</div>
    </section>
  );
}

export default Portfolio;

