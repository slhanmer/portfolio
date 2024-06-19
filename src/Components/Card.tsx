import React, { forwardRef, useState, useEffect } from 'react';
import { useGlobalState } from '../Contexts/GlobalStateContext';
import { flickerTimer } from '../Data/Constants';

type CardProps = {
  children: React.ReactNode;
};

const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { isSwitchOn } = useGlobalState();
  const [ isVisible, setIsVisible ] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isSwitchOn) {
      timer = setTimeout(() => {
        setIsVisible(true);
      }, flickerTimer - 1000);
    } else {
      setIsVisible(false);
    }

    return () => {
      clearTimeout(timer);
    }
  }, [isSwitchOn]);


  return (
    <div className={`card ${isVisible ? 'flicker-effect' : ' off'}`} ref={ref}>
      {props.children}
    </div>
  );
});

export default Card;
