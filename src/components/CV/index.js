import React from "react";
import "./cv.css";
import { Container } from 'react-bootstrap';

function CV() {
  const header = "CV  &  Technical Skills";
  const message = "Please view a copy of Thom Williams CV here:";

  return (
    <section className="content-container">
      <h2>{header}</h2>
      <p>
        Through the University of Manchester Coding Bootcamp and elsewhere in my
        career, I have gained a variety of front-end and back-end skills, plus other relevant experience including:</p>
        <ul>
          <li>
            <strong>Front-end:</strong> REACT, HTML, CSS, Javascript (JS), Markdown
            (md), CSS Frameworks (Bootstrap, Bulma, Materialize), server- side
          APIs, MERN.
          </li>
          <li>
          <strong>Back-end:</strong> Node.Js, Express. js, NPM Packages, MySql,
            MongoDB, Sequelize ORM.
          </li>

          <li>
          <strong>Other: </strong>MS Office, Adobe Illustrator, Adobe Photoshop, Google docs /
            slides / sheets etc, GitHub, Mailchimp, Fireworks, Stereonet and
            editing software including Final Cut Pro.
          </li>
        </ul>
      <p>{message}</p>
      <Container>
      <iframe src="https://drive.google.com/file/d/1UW2P2EesEGoN6giyZk3Ia6yO8N0Xvy4C/preview" width="640" height="480" allow="autoplay"></iframe>
      </Container>
      <h2><a href="https://drive.google.com/file/d/1UW2P2EesEGoN6giyZk3Ia6yO8N0Xvy4C/view?usp=sharing">
        OR DOWNLOAD A COPY HERE
      </a></h2>
    </section>
  );
}

export default CV;
