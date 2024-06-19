import React, { useEffect } from 'react';
import { CardDisplay, Title, NavBar, ScrollIndicator, Spacer } from '../Components';
import useCardData from '../Data/CardData';
import { useGlobalState } from '../Contexts/GlobalStateContext';

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  const cards = useCardData();
  const { isSwitchOn } = useGlobalState();

  useEffect(() => {
    if (!isSwitchOn) {
      window.scrollTo(0, 0);
    }
  }, [isSwitchOn]);

  return (
    <div>
      <Title title='Simon Hanmer' subTitle={<>Former Chef turned Developer<br /></>} />
      <div className='page-container'>
        <NavBar />
        <CardDisplay cards={cards} />
      </div>
      <Spacer rem={6}/>
      <ScrollIndicator />
    </div>
  );
}; 

export default Home;