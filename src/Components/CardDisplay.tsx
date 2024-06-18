import React from 'react';
import Card from './Card';

type CardInfo = {
  id: number;
  ref: React.RefObject<HTMLDivElement>;
  content: string | React.ReactNode;
};

type CardDisplayProps = {
  cards: CardInfo[];
};

const CardDisplay: React.FC<CardDisplayProps> = ({ cards }) => {

  return (
    <div className='card-container'>
      {cards.map((card) => {
        return (
          <Card ref={card.ref} key={card.id}>
            {card.content}
          </Card>
        );
      })}
    </div>
  );
};

export default CardDisplay;
