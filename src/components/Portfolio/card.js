import React from 'react';
import './portfolio.css';
// import Display from './display.js';


export default function Card(props) {
  const cardStyle = {
    width: '18rem',
    margin: '1rem',
  };
  return (
    <div>
      <div className="card" style={cardStyle}>
        <img
          className="card-img-top"
          src={`${props.image}`}
          alt="Card cap"
        />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.description}</p>
         
          <a href={`${props.deployedLink}`} className="btn btn-primary">
            Deployed Link 
          </a>
          <a href={`${props.github}`} className="btn btn-secondary">
            GitHub 
          </a>
        </div>
      </div>
    </div>
  );
}

// SEE GRID CARDS - https://react-bootstrap.github.io/components/cards/
// <Row xs={1} md={2} className="g-4">
//   {Array.from({ length: 4 }).map((_, idx) => (
//     <Col>
//       <Card>
//         <Card.Img variant="top" src="holder.js/100px160" />
//         <Card.Body>
//           <Card.Title>Card title</Card.Title>
//           <Card.Text>
//             This is a longer card with supporting text below as a natural
//             lead-in to additional content. This content is a little bit longer.
//           </Card.Text>
//         </Card.Body>
//       </Card>
//     </Col>
//   ))}
// </Row>