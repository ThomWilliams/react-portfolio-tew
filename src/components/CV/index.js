import React from 'react';
import './cv.css'

function CV() {
  const header = 'CV';
  const message = 'Please view / download a copy of Thom Williams CV here:';
  
  return (
    <section className="content-container">
        <h2>{header}</h2>
      <p>{message}</p>
      <a href="https://drive.google.com/file/d/1UW2P2EesEGoN6giyZk3Ia6yO8N0Xvy4C/view?usp=sharing">HERE</a>
    </section>
  );
}

export default CV;
