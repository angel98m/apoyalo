import React from 'react';

const PersonCard = (props) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h2>{props.lastName}, {props.firstName}</h2>
      <p>Age: {props.age}</p>
      <p>Hair-Color: {props.hairColor}</p>
    </div>
  );
}

export default PersonCard;