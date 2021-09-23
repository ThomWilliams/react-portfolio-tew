import React from 'react';
import './portfolio.css';
import Display from './display.js';
import { Container } from 'react-bootstrap';

function Portfolio() {
  return (
    <section className="content-container">
          <h1>Examples of Thom's Work:</h1>
      <Container fluid>
      <Display />
      </Container>
    </section>
  );
}

export default Portfolio;

