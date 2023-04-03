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

class Card extends React.Component<MyProps> {
  render(): React.ReactNode {
    const { className, src } = this.props;
    const { id, email, name } = this.props.monster;

    return (
      <div className={`card-container ${className}`} key={id}>
        <img src={src} alt={name} />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
