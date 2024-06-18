import React from 'react';
import classNames from 'classnames';
import { useGlobalState } from '../Contexts/GlobalStateContext';

type NavBarProps = {
  style?: React.CSSProperties;
};

const NavBar: React.FC<NavBarProps> = ({ style }) => {
  const { isFlickering, isSwitchOn, aboutRef, projectsRef, contactRef, scrollToRef } = useGlobalState();

  const linkClass = classNames({
    'flicker-effect': isFlickering,
    'nav-link': isSwitchOn,
    'nav-link-dark': !isSwitchOn,
  });

  return (
    <nav className='navBar' style={style}>
      <div className={linkClass} onClick={() => scrollToRef(aboutRef)}>About Me</div>
      <div className={linkClass} onClick={() => scrollToRef(projectsRef)}>Projects</div>
      <div className={linkClass} onClick={() => scrollToRef(contactRef)}>Contact</div>
    </nav>
  );
};

export default NavBar;
