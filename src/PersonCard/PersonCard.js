import React, { useState } from 'react';

const PersonCard = (props) => {
  const [age, setAge] = useState(props.age);

  const handleBirthday = () => {
    setAge(age + 1);
  };

  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h2>{props.lastName}, {props.firstName}</h2>
      <p>Age: {age}</p>
      <p>Hair-Color: {props.hairColor}</p>
      <button onClick={handleBirthday}>Birthday Button for {props.firstName}</button>
    </div>
  );
}

export default PersonCard;