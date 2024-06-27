import React, { useEffect } from 'react';
import { Switch, SubTitle } from './';
import { useGlobalState } from '../Contexts/GlobalStateContext';

type FlickeringTitleProps = {
  title: React.ReactNode;
  subTitle?: React.ReactNode;
};

const FlickeringTitle: React.FC<FlickeringTitleProps> = ({ title, subTitle }) => {
  const { isSwitchOn, setIsFlickering, isFlickering } = useGlobalState();

  useEffect(() => {
    if (isSwitchOn) {
      // Start the flickering effect
      setIsFlickering(true);
      const timer = setTimeout(() => {
        setIsFlickering(false);  // Turn off flickering after 1.5 seconds
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      // Ensure flickering is turned off when switch is off
      setIsFlickering(false);
    }
  }, [isSwitchOn, setIsFlickering]);

  return (
    <div className='title'>
      <div className='column-container'>
        <div className={`${isFlickering ? 'flicker-effect' : ''} ${isSwitchOn ? 'title-text' : 'title-text-dark'}`}>
          {title}
        </div> 
        {subTitle && <SubTitle subTitle={subTitle} className={`${isFlickering ? ' flicker-effect' : ''} ${!isSwitchOn ? ' dark' : ''}`}/>}
      </div>
      <Switch />
    </div>
  );
};

export default FlickeringTitle;
