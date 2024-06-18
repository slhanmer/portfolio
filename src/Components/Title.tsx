import React, { useEffect } from 'react';
import { Switch, SubTitle } from './';
import { useGlobalState } from '../Contexts/GlobalStateContext';

type FlickeringTitleProps = {
  title: React.ReactNode;
  subTitle?: React.ReactNode;
};

const FlickeringTitle: React.FC<FlickeringTitleProps> = ({ title, subTitle }) => {
  const { isSwitchOn, isFlickering } = useGlobalState();

  useEffect(() => {
      const timer = setTimeout(() => {
      }, 1500);
      return () => clearTimeout(timer);
  }, [isSwitchOn]);

  return (
    <div className='title'>
      <div className='column-container'>
        <div className={`${isFlickering ? 'flicker-effect' : ''} ${isSwitchOn ? 'hero-text' : 'hero-text-dark'}`}>
          {title}
        </div> 
        {subTitle && <SubTitle subTitle={subTitle} className={`${isFlickering ? ' flicker-effect' : ''} ${!isSwitchOn ? ' dark' : ''}`}/>}
      </div>
      <Switch />
    </div>
  );
};

export default FlickeringTitle;