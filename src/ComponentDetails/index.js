import React from 'react';
import './style.scss';

function ComponentDetails({ name, description, index }) {
  return (
    <div className="ComponentDetails" key={index}>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

export default ComponentDetails;
