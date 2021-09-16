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
    description: 'A podcast selection app built with full MERN stack, with Stripe donation feature',
    github:'https://github.com/ThomWilliams/castaway-app',
    deployedLink:'https://podcastaway-app.herokuapp.com/',
    image: castaway,
  },
  {
    name: 'Pose-It',
    description: 'Fashion App to build up a wardrobe of inspiration that users can filter to find outfits, view details, like and save them. They can also upload their own outfits.',
    github:'https://github.com/itsraulsanz/pose-it-app',
    deployedLink:'https://pose-it-app.herokuapp.com/',
    image: poseIt,
  },
  {
    name: 'Hammered Horror',
    description: 'A horror film selector',
    github:'https://github.com/ThomWilliams/trilogy-film-project',
    deployedLink:'https://thomwilliams.github.io/trilogy-film-project/index.html',
    image: HammeredHorror,
  },
  {
    name: 'Star Tech',
    description: 'Star Tech is a CMS-style blog site. The app allows users to post blogs and comments, read blogs, edit blogs and delete blogs.',
    github:'https://github.com/ThomWilliams/mvc-tech-blog-tew',
    deployedLink:'https://serene-chamber-97267.herokuapp.com/',
    image: starTech,
  },
  {
    name: 'Work Out Tracker',
    description: 'A fitness routine tracking app',
    github:'https://github.com/ThomWilliams/workout-tracker-tew',
    deployedLink:'https://stunning-congaree-71957.herokuapp.com/',
    image: fitnessTracker,
  },
  {
    name: 'Work Day Scheduler',
    description: 'A working day management app',
    github:'https://github.com/ThomWilliams/work-day-scheduler-tew',
    deployedLink:'https://thomwilliams.github.io/work-day-scheduler-tew/',
    image: workDay,
  },
  {
    name: 'Coding Quiz',
    description: 'A javascript coding quiz',
    github:'https://github.com/ThomWilliams/web-apis-code-quiz-tew',
    deployedLink:'https://thomwilliams.github.io/web-apis-code-quiz-tew/',
    image: codeQuiz,
  },
];

export default function Display() {
  return (
    <div>
      {portfolios.map((portfolio) => (
        <Card name={portfolio.name} description={portfolio.description} github={portfolio.github} deployedLink={portfolio.deployedLink} image={portfolio.image} key={portfolio.id} />
      ))}
    </div>
  );
}
