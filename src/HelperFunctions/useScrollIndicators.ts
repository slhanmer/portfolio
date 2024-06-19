import { useEffect } from 'react';
import { useGlobalState } from '../Contexts/GlobalStateContext';
import { flickerTimer } from '../Data/Constants';

const useScrollIndicators = (): void => {
  const { isSwitchOn } = useGlobalState();
  const timerDuration = isSwitchOn ? (flickerTimer - 950) : 0;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const checkHeightAndToggleScrollIndicators = () => {
        const totalHeight = document.documentElement.scrollHeight;
        const viewportHeight = window.innerHeight;
        const scrollIndicators = document.querySelectorAll('.scroll-indicator-container') as NodeListOf<HTMLElement>;

        if (totalHeight > viewportHeight) {
          scrollIndicators.forEach(el => el.style.display = 'flex');
        } else {
          scrollIndicators.forEach(el => el.style.display = 'none');
        }
      };

      checkHeightAndToggleScrollIndicators();
    }, timerDuration);

    window.addEventListener('resize', checkHeightAndToggleScrollIndicators);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', checkHeightAndToggleScrollIndicators);
    };
  }, [isSwitchOn, timerDuration]);

  const checkHeightAndToggleScrollIndicators = () => {
    const totalHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;
    const scrollIndicators = document.querySelectorAll('.scroll-indicator-container') as NodeListOf<HTMLElement>;

    if (totalHeight > viewportHeight) {
      scrollIndicators.forEach(el => el.style.display = 'flex');
    } else {
      scrollIndicators.forEach(el => el.style.display = 'none');
    }
  };
};

export default useScrollIndicators;