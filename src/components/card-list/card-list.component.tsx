import { Monster } from '../../App';
import './card-list.style.css';
import Card from '../card/card.component';

type CardListProps = {
  monsters: Monster[];
};

const CardList = ({ monsters }: CardListProps) => {
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
