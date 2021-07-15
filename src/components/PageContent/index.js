import React from 'react';
import './pagecontent.css'; 
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import CV from "./components/CV";
import PageContent from "./components/PageContent";

function Project() {
  const message = 'This is the projects Component';
  return (
    <section className="content-container">
      <h2>{message}</h2>
    </section>
  );
}

export default Project;


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
