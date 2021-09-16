import React from "react";
import "./cv.css";
import { Container } from "react-bootstrap";

function CV() {
  const header = "CV  &  Technical Skills";
  const message = "Please view a copy of Thom Williams CV here:";

  return (
    <section className="content-container">
      <h2>{header}</h2>
      <p>
      Key technical skills gained at The University of Manchester Coding Bootcamp and elsewhere in Thom's career:
      </p>
      <ul>
        <li>
          <strong>Front-end:</strong> HTML, CSS, JavaScript (JS), React, Markdown, CSS Frameworks (Bootstrap, Bulma, Materialize), server-side APIs

        </li>
        <li>
          <strong>Back-end:</strong> MERN Stack, GraphQL, NPM Packages, MySQL, MongoDB, Sequelize ORM, Node.Js, Express.
        </li>

        <li>
          <strong>Other: </strong>MS Office, Adobe Illustrator, Adobe Photoshop, Google docs / slides / sheets etc, GitHub, Mailchimp, Fireworks, Stereonet and editing software including Final Cut Pro.
        </li>
      </ul>
      <p>{message}</p>
      <Container>
        <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vRMmri4SkloMaYodfA1SUeaSoGCpD5tUUD12LupSKJH1m6ufzMZoB9r7B6E4Ujt2w/pub?embedded=true"
          width="640"
          height="480"
          allow="autoplay"
        ></iframe>
      </Container>
      <h2>
        <a href="https://drive.google.com/file/d/1UW2P2EesEGoN6giyZk3Ia6yO8N0Xvy4C/view?usp=sharing">
          OR DOWNLOAD A COPY HERE
        </a>
      </h2>
    </section>
  );
}

export default CV;
