import React from "react";
import "./about.css";
import profilePic from "../images/thom_barnard.jpeg";

function AboutMe() {
  const header = "About Me";

  return (
    <section className="content-container">
      <h1>{header}</h1>
      <div className="container">
        <img
          className="image-profile"
          src={`${profilePic}`}
          alt="Profile Picture"
        />
      </div>
      <div className="about-text-container">
      <div className="about-text">
        <div className="about-text-top">
          <p>
          <strong> Welcome to the portfolio site of Thom Williams</strong>{" "}
          </p>
        </div>
        <div>
        <p>
          Thom is a Full-stack web developer with an employment history in{" "}
          <strong> music industry-related PR, media and communications</strong>{" "}
          . Recently graduated from
          <strong> The University of Manchester Coding Boot Camp</strong> with a
          full-stack web development course certificate. Skills and knowledge
          gained from the course include the understanding and application of{" "}
          <strong>
            {" "}
            JavaScript, CSS, React.js, Node.js, the full MERN stack, third-party
            APIs, HTML-5 and more{" "}
          </strong>{" "}
          .
        </p>
        <p>
          A committed problem solver with a keen eye for design, the course has
          enabled him to tailor his abilities to{" "}
          <strong> create a variety of simple and complex applications </strong>{" "}
          including film selectors, fashion apps, portfolio sites, quizzes,
          weather apps and more.
        </p>
        <p>
          A <strong>multi-award winning student</strong> while studying both{" "}
          <strong> Earth Sciences</strong> and
          <strong> Multimedia Journalism at University</strong>, he has since
          flourished in his career as Press Officer and is currently an active
          Director of northern music promotions company{" "}
          <strong> Sonic PR</strong>. In his search for new challenges and
          opportunities, he is seeking to combine his passions for music and
          media with his newly acquired coding skills. His ambition is to create
          innovative applications of relevance to both industries, perhaps best
          exemplified by the
          <a href="https://podcastaway-app.herokuapp.com/">
            Castaway podcasting app
          </a>
          he created during the final project of the Coding Bootcamp course.
        </p>
        <p>
          Originally from <strong> Wales</strong>, Thom currently works remotely
          from his home in <strong> Manchester</strong>, where he has lived for
          over a decade.
        </p>
        </div>
      </div>
      </div>
    </section>
  );
}

export default AboutMe;
