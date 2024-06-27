import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

// Define the global state
interface GlobalState {
  isSwitchOn: boolean;
  isFlickering: boolean;
  toggleSwitch: () => void;
  setIsFlickering: (flickering: boolean) => void;  // Add this line
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
    const observer = new IntersectionObserver((entries) => {
      let mostVisible: { ref: Element | null; ratio: number; } = { ref: null, ratio: 0 };
      entries.forEach(entry => {
        if (entry.intersectionRatio > mostVisible.ratio) {
          mostVisible = { ref: entry.target, ratio: entry.intersectionRatio };
        }
      });

      setAboutVisible(false);
      setProjectsVisible(false);
      setContactVisible(false);

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
      isSwitchOn, isFlickering, toggleSwitch, setIsFlickering,  // Add setIsFlickering here
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
