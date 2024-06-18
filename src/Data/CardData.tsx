import { useGlobalState } from '../Contexts/GlobalStateContext';

// Custom hook to provide data for the cards
const useCardData = () => {
  const { aboutRef, projectsRef, contactRef } = useGlobalState();

  const cards = [
    { id: 1, content: <>About Me</>, ref: aboutRef },
    { id: 2, content: <>My Projects</>, ref: projectsRef },
    { id: 3, content: <>Contact</>, ref: contactRef }
  ];

  return cards;
};

export default useCardData;
