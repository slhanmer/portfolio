import React from 'react';
import { CardDisplay, Title, NavBar } from '../Components';
import useCardData from '../Data/CardData';

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  const cards = useCardData();

  return (
    <div>
      <Title title='Simon Hanmer' subTitle={<>Former Chef turned Developer<br /><span>... cooking up code with the same passion I brought to the kitchen</span></>} />
      <div className='page-container'>
        <NavBar />
        <CardDisplay cards={cards} />
      </div>
    </div>
  );
}; 

export default Home;