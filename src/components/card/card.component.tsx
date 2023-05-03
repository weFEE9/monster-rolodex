import { Monster } from '../../App';
import './card.style.css';

type CardProps = {
  className: string;
  monster: Monster;
  src: string;
};

const Card = ({ className, monster, src }: CardProps) => {
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
