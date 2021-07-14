import React from 'react';
import './portfolio.css';
import Index from './index.js';
import Images from '../images';

const poseIt = '../images/'
const HammeredHorror = '../images/'

const portfolios = [
  {
    name: 'Pose-It App',
    description: 'A fashion App',
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
    name: 'Pose-It App',
    description: 'The best boy',
    github:'https://github.com/itsraulsanz/pose-it-app',
    deployedLink:'https://pose-it-app.herokuapp.com/',
    image: poseIt,
  },
  {
    name: 'Pose-It App',
    description: 'The best boy',
    github:'https://github.com/itsraulsanz/pose-it-app',
    deployedLink:'https://pose-it-app.herokuapp.com/',
    image: poseIt,
  },
  {
    name: 'Pose-It App',
    description: 'The best boy',
    github:'https://github.com/itsraulsanz/pose-it-app',
    deployedLink:'https://pose-it-app.herokuapp.com/',
    image: poseIt,
  },
];

// CARDS


// import React from 'react';

// export default function Card(props) {
//   const cardStyle = {
//     width: '18rem',
//   };

//   // Helper function that generates a random width for our placeholder images
//   const randomWidth = () => {
//     const number = Math.random() * (300 - 200) + 200;
//     return number.toString().split('.')[0];
//   };

//   return (
//     <div>
//       <div className="card" style={cardStyle}>
//         <img
//           className="card-img-top"
//           src={`http://placecorgi.com/${randomWidth()}`}
//           alt="Card cap"
//         />
//         <div className="card-body">
//           <h5 className="card-title">{props.name}</h5>
//           <p className="card-text">{props.description}</p>
//           <a href="#" className="btn btn-primary">
//             Adopt {props.name}
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }
