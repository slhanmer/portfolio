import React, { forwardRef } from 'react';
import '../Styles/Card.scss';

type CardProps = {
  children: React.ReactNode;
};

const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  return (
    <div className='card' ref={ref}>
      {props.children}
    </div>
  );
});

export default Card;
