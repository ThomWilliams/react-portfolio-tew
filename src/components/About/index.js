import React from 'react';
import './about.css'
import profilePic from '../images/thom_barnard.jpeg'

function AboutMe() {
  const header = 'About Me';
  
  
  return (
    <section className="content-container">
        <h2>{header}</h2>
        <div className="container">
        <img 
          className="image-profile"
          src={`${profilePic}`}
          alt="Profile Picture"
        />
    </div>
    <div className="about-text">
      <p>This is the portfolio site of <strong> Thom Williams </strong>. </p>
      <p>I am currently a part-time student at the <strong>University of Manchester Coding Bootcamp </strong>: full-stack web development course. </p>
      <p>Alongside my studies, I am publicist and co-director of music PR agency and consultancy Sonic PR.</p> 
      <p>Originally from South Wales, I have lived in <strong>Manchester </strong>for over 12 years.</p>
   </div>
    </section>
  );
}


export default AboutMe;
