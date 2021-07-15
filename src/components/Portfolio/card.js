import React from 'react';
import './portfolio.css';
import Display from './display.js';


export default function Card(props) {
  const cardStyle = {
    width: '18rem',
  };
  return (
    <div>
      <div className="card" style={cardStyle}>
        <img
          className="card-img-top"
          src={`${image}`}
          alt="Card cap"
        />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.description}</p>
          <a href={`${props.github}`} className="btn btn-primary">
            GitHub 
          </a>
          <a href={`${props.deployedLink}`} className="btn btn-secondary">
            Deployed Link 
          </a>
        </div>
      </div>
    </div>
  );
}
