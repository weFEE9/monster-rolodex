import React from 'react';
import './card.style.css';

type MyProps = {
  className: string;
  monster: Monster;
  src: string;
};

type Monster = {
  id: string;
  name: string;
  email: string;
  username: string;
};

const Card = ({ className, monster, src }: MyProps) => {
  const { email, name } = monster;
  return (
    <div className='card-container'>
      <img src={src} alt={name} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
