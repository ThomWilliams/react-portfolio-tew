import React from 'react';
import './portfolio.css';
import Card from './card';
import codeQuiz from "../../components/images/coding-quiz.jpg";
import poseIt from "../../components/images/pose-it.jpg";
import castaway from "../../components/images/Castaway.jpg";
import HammeredHorror from "../../components/images/hammered-horror.jpg";
import workDay from "../../components/images/work-day-scheduler.jpg";
import noteTaker from "../../components/images/note-taker.jpg";
import fitnessTracker from "../../components/images/workout-tracker.jpg";
import starTech from "../../components/images/star-tech.jpg";

const portfolios = [
  {
    name: 'Castaway',
    description: 'A podcast selection app and player built with full MERN stack, with Stripe donation feature. React front-end design. Apollo server. JWT tokens and auth middleware security and bcrypt hashing.',
    tech: 'MongoDB, Express.js, React, Node.js, HTML, CSS, MD, Heroku, ListenNotes API, Stripe.',
    github:'https://github.com/ThomWilliams/castaway-app',
    deployedLink:'https://podcastaway-app.herokuapp.com/',
    image: castaway,
  },
  {
    name: 'Pose-It',
    description: 'Fashion App to build up a wardrobe of inspiration that users can filter to find outfits, view details, like and save them. They can also upload their own outfits. Uses Node.js and Express.js to create a RESTful API. Handlebars.js template engine. MySQL database and the Sequelize ORM connection.',
    tech: 'Node.js, Express.js, MySQL, Sequelize ORM, Handlebars.js, HTML, CSS, JS, MD, JSON, GitHub, Various NPM Packages.',
    github:'https://github.com/itsraulsanz/pose-it-app',
    deployedLink:'https://pose-it-app.herokuapp.com/',
    image: poseIt,
  },
  {
    name: 'Hammered Horror',
    description: 'An interactive horror film selector that cross references the OMDB and The Movie DB APIs to assign a user with a film to match their mood, with a unique “Trick Or Treat” rating system. ',
    tech: 'HTML, CSS, JS, MD, CSS Frameworks (Bulma, Materialize), third-party APIs(OMDB, The Movie DB)',
    github:'https://github.com/ThomWilliams/hammered-horror-app',
    deployedLink:'https://thomwilliams.github.io/hammered-horror-app/',
    image: HammeredHorror,
  },
  {
    name: 'Star Tech',
    description: 'Star Tech is a CMS-style blog site. The app allows users to post blogs and comments, read blogs, edit blogs and delete blogs. The app follows the MVC paradigm in structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.',
    tech: 'HTML, CSS, JavaScript, Node.js, Express.js, MySQL, Sequelize ORM, Cookies, express-session, Heroku',
    github:'https://github.com/ThomWilliams/mvc-tech-blog-tew',
    deployedLink:'https://serene-chamber-97267.herokuapp.com/',
    image: starTech,
  },
  {
    name: 'Work Out Tracker',
    description: 'A workout tracker that allows users to input and monitor their daily workout. Users can input name, type, weight, sets, reps, and duration of their exercises. If the exercise is a cardio exercise, they can track the distance they have traveled. MongoDB database, with routes handled by Express.',
    tech: 'HTML, CSS, JavaScript, MongoDB, Mongoose, Express, Heroku',
    github:'https://github.com/ThomWilliams/workout-tracker-tew',
    deployedLink:'https://stunning-congaree-71957.herokuapp.com/',
    image: fitnessTracker,
  },
  {
    name: 'Work Day Scheduler',
    description: 'A simple calendar application that allows a user to save events for each hour of the day. features dynamically updated HTML and CSS powered by JQuery, plus enhanced functionality and styling from third party APIs Bootstrap, Moment date library, Google Fonts and Font Awesome',
    tech: 'HTML, CSS, JavaScript, Third Party APIs (Moment), JQuery, CSS Frameworks (Bootstrap, Google Fonts)',
    github:'https://github.com/ThomWilliams/work-day-scheduler-tew',
    deployedLink:'https://thomwilliams.github.io/work-day-scheduler-tew/',
    image: workDay,
  },
  {
    name: 'Coding Quiz',
    description: 'A coding quiz with dynamically updated HTML and CSS powered by JavaScript.',
    tech: 'HTML, CSS, JavaScript',
    github:'https://github.com/ThomWilliams/web-apis-code-quiz-tew',
    deployedLink:'https://thomwilliams.github.io/web-apis-code-quiz-tew/',
    image: codeQuiz,
  },
];

export default function Display() {
  return (
    <div>
      {portfolios.map((portfolio) => (
        <Card name={portfolio.name} description={portfolio.description} tech={portfolio.tech} github={portfolio.github} deployedLink={portfolio.deployedLink} image={portfolio.image} key={portfolio.id} />
      ))}
    </div>
  );
}
