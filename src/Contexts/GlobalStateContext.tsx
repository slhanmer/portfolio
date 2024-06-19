import React, { createContext, useContext, useState, useRef } from 'react';

// Define the global state
interface GlobalState {
  isSwitchOn: boolean;
  isFlickering: boolean;
  toggleSwitch: () => void;
  aboutRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
  scrollToRef: (ref: React.RefObject<HTMLDivElement>) => void;
}

// Create the global state context
const GlobalStateContext = createContext<GlobalState | undefined>(undefined);

// Create the global state provider
export const GlobalStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isFlickering, setIsFlickering] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const toggleSwitch = () => {
    const newState = !isSwitchOn;
    setIsSwitchOn(newState);
    if (newState) {
      setIsFlickering(true);
      setTimeout(() => setIsFlickering(false), 1500);
    } else {
      setIsFlickering(false);
    }
  };

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <GlobalStateContext.Provider value={{
      isSwitchOn, isFlickering, toggleSwitch, aboutRef, projectsRef, contactRef, scrollToRef
    }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Custom hook to use the global state
export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
};
