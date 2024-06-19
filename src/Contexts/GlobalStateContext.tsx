import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

// Define the global state
interface GlobalState {
  isSwitchOn: boolean;
  isFlickering: boolean;
  toggleSwitch: () => void;
  aboutRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
  aboutVisible: boolean;
  projectsVisible: boolean;
  contactVisible: boolean;
  setAboutVisible: (visible: boolean) => void;
  setProjectsVisible: (visible: boolean) => void;
  setContactVisible: (visible: boolean) => void;
  scrollToRef: (ref: React.RefObject<HTMLDivElement>) => void;
}

const GlobalStateContext = createContext<GlobalState | undefined>(undefined);

export const GlobalStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isFlickering, setIsFlickering] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const toggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
    setIsFlickering(true);
    setTimeout(() => setIsFlickering(false), 1500);
  };

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    interface MostVisible {
      ref: Element | null;
      ratio: number;
    }

    const observer = new IntersectionObserver((entries) => {
      let mostVisible: MostVisible = { ref: null, ratio: 0 };
      entries.forEach(entry => {
        const { intersectionRatio } = entry;
        if (intersectionRatio > mostVisible.ratio) {
          mostVisible = { ref: entry.target, ratio: intersectionRatio };
        }
      });

      // Reset all visibility states
      setAboutVisible(false);
      setProjectsVisible(false);
      setContactVisible(false);

      // Set the most visible element as active
      if (mostVisible.ref === aboutRef.current) setAboutVisible(true);
      if (mostVisible.ref === projectsRef.current) setProjectsVisible(true);
      if (mostVisible.ref === contactRef.current) setContactVisible(true);
      
    }, { threshold: [0, 0.1, 0.5, 0.9] });

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <GlobalStateContext.Provider value={{
      isSwitchOn, isFlickering, toggleSwitch,
      aboutRef, projectsRef, contactRef,
      aboutVisible, projectsVisible, contactVisible,
      setAboutVisible, setProjectsVisible, setContactVisible,
      scrollToRef
    }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
};
