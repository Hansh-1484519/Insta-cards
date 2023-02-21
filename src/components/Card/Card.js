import React from 'react'
import './Card.css'

const Card = ({ first_name, last_name, email, avatar }) => {
  return (
    <div className="card">
      <img src={avatar} alt={`${first_name} ${last_name}`} />
      <h2>{`${first_name} ${last_name}`}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;

