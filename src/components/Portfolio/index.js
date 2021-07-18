import React from 'react';
import './portfolio.css';
import Display from './display.js';
import { Container } from 'react-bootstrap';

function Portfolio() {
  return (
    <section className="content-container">
          <h2>Examples of Thom's Work:</h2>
      <Container fluid>
      <Display />
      </Container>
    </section>
  );
}

export default Portfolio;

