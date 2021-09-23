import React from 'react';
import './portfolio.css';
import { Row, Col, Card, Container } from 'react-bootstrap';


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
        <Container>
    <Col>
      <Card className="card">
        <Card.Img variant="top" src={`${props.image}`} alt="Card cap" />
        <Card.Body>
          <Card.Title><h2>{props.name}</h2></Card.Title>
          <Card.Text>
          <p><strong>About: </strong>{props.description}</p>
          </Card.Text>
          <Card.Text>
          <p><strong>Tech Used: </strong>{props.tech}</p>
          </Card.Text>
          <a href={`${props.deployedLink}`} className="btn btn-warning">
            Deployed Link 
          </a>
          <a href={`${props.github}`} className="btn btn-outline-dark">
            GitHub 
          </a>
        </Card.Body>
      </Card>
    </Col>
    </Container>
  ))}
</Row>


   
  );
}
