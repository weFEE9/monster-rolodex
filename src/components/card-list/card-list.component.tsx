import React from 'react';
import './card-list.style.css';
import Card from '../card/card.component';

type MyProps = {
  monsters: Monster[];
};

type Monster = {
  id: string;
  name: string;
  username: string;
  email: string;
};

const CardList = ({ monsters }: MyProps) => {
  return (
    <div className='card-list'>
      {monsters.map((monster) => {
        return (
          <Card
            key={monster.id}
            className='card-container'
            monster={monster}
            src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
          />
        );
      })}
    </div>
  );
};

export default CardList;
