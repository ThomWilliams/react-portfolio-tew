import React from 'react';
import './portfolio.css';
import Card from './card';
import codeQuiz from "../../components/images/coding-quiz.jpg";
import poseIt from "../../components/images/pose-it.jpg";
import HammeredHorror from "../../components/images/hammered-horror.jpg";
import workDay from "../../components/images/work-day-scheduler.jpg";
import noteTaker from "../../components/images/note-taker.jpg";


const portfolios = [
  {
    name: 'Pose-It App',
    description: 'A fashion sharing App',
    github:'https://github.com/itsraulsanz/pose-it-app',
    deployedLink:'https://pose-it-app.herokuapp.com/',
    image: poseIt,
  },
  {
    name: 'Hammered Horror',
    description: 'A horror film selector',
    github:'https://thomwilliams.github.io/trilogy-film-project/index.html',
    deployedLink:'https://github.com/ThomWilliams/trilogy-film-project',
    image: HammeredHorror,
  },
  {
    name: 'Work Day Scheduler',
    description: 'A working day management app',
    github:'https://github.com/itsraulsanz/pose-it-app',
    deployedLink:'https://thomwilliams.github.io/work-day-scheduler-tew/',
    image: workDay,
  },
  {
    name: 'Note Taker App',
    description: 'An diary keeping reminder app',
    github:'https://github.com/ThomWilliams/note-taker-tew',
    deployedLink:'https://radiant-meadow-11834.herokuapp.com/',
    image: noteTaker,
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
