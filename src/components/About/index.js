import React from 'react';
import './about.css'
import profilePic from '../images/thom_barnard.jpeg'

function AboutMe() {
  const header = 'About Me';
  const message = 'This is the portfolio site of Thom Williams. I am currently a part-time student at the University of Manchester Coding Bootcamp: full-stack web development course. Alongside my studies, I am publicist and co-director of music PR agency and consultancy Sonic PR. Originally from South Wales, I have lived in Manchester for over 12 years.';
  
  return (
    <section className="content-container">
        <h2>{header}</h2>
        <img
          className="card-img-top"
          src={`${profilePic}`}
          alt="Profile Picture"
        />
      <p>{message}</p>
    </section>
  );
}


export default AboutMe;
