import classNames from 'classnames';
import React from 'react';

type ButtonProps = {
  children: string;
  onClick: () => void | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void);
  type?: 'button' | 'submit' | 'reset';
  style?: React.CSSProperties;
  buttonType?: 'primary' | 'cancel';
};

const Button: React.FC<ButtonProps> = ({ children, onClick, type = 'button', style, buttonType = 'primary' }) => {
  const buttonClass = classNames({
    'btn-primary': buttonType === 'primary',
    'btn-cancel': buttonType === 'cancel',
  });

  return (
    <button className={buttonClass} onClick={onClick} type={type} style={style}>
      {children}
    </button>
  );
};

export default Button;