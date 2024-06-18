import React from 'react';

type SubTitleProps = {
  subTitle: React.ReactNode;
  className?: string;
};

const SubTitle: React.FC<SubTitleProps> = ({ subTitle, className }) => {
  return (
    <div className={'subtitle' + className}>
      {subTitle}
    </div>
  );
};

export default SubTitle;