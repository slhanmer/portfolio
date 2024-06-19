import React from 'react';
import { ReactComponent as DownArrow } from '../Images/scrollDown.svg';
import { ReactComponent as UpArrow } from '../Images/scrollUp.svg';
import useScrollIndicators from '../CustomHooks/useScrollIndicators';
import useScrollPosition from '../CustomHooks/useScrollPosition';

type ScrollIndicatorProps = {
  style?: React.CSSProperties;
};

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ style }) => {
  useScrollIndicators();
  const { atTop, atBottom } = useScrollPosition();

  const handleScrollDown = () => {
    window.scrollBy({ top: 500, left: 0, behavior: 'smooth' });
  }
  
  const handleScrollUp = () => {
    window.scrollBy({ top: -500, left: 0, behavior: 'smooth' });
  }

  return (
    <div className='desktop-only'>
      { !atTop && 
        <div className='scroll-indicator-container top' style={{ display: atTop ? 'none' : 'flex' }} onClick={handleScrollUp}>
          <UpArrow className='scroll-indicator' style={style} />
        </div>
      }
      { !atBottom && 
        <div className='scroll-indicator-container bottom' style={{ display: atBottom ? 'none' : 'flex' }} onClick={handleScrollDown}>
          <DownArrow className='scroll-indicator' style={style} />
        </div>
      }
    </div>
  );
};

export default ScrollIndicator;