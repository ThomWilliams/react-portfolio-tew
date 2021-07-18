import React from 'react';
import './portfolio.css';
import { Row, Col, Card } from 'react-bootstrap';


export default function Cards(props) {
  const cardStyle = {
    width: '15rem',
    margin: '1rem',
    marginBottom: '3rem',
    padding: '5px',

  };

  return (
    <Row xs={1} md={1} lg={2} className="g-4">
  {Array.from({ length: 1 }).map((_, idx) => (
    <Col>
      <Card className="card">
        <Card.Img variant="top" src={`${props.image}`} alt="Card cap" />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
          {props.description}
          </Card.Text>
          <a href={`${props.deployedLink}`} className="btn btn-primary">
            Deployed Link 
          </a>
          <a href={`${props.github}`} className="btn btn-secondary">
            GitHub 
          </a>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>

   
  );
}

// SEE GRID CARDS - https://react-bootstrap.github.io/components/cards/
// <Row xs={1} md={2} className="g-4">
//   {Array.from({ length: 4 }).map((_, idx) => (
//     <Column>
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