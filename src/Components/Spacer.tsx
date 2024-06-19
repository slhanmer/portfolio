import React from 'react';

type SpacerProps = {
  rem: number;
};

const Spacer: React.FC<SpacerProps> = ({ rem = 1 }) => {
  return <div style={{ height: `${rem}rem` }} />;
};

export default Spacer;