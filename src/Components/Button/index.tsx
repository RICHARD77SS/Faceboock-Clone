import React from 'react';

import { ButtonSt } from './styles'

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  name?: string;
  type?: "button" | "submit" | "reset";
  onclick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;

}

const Button = (Props: ButtonProps) => {
  return (
    <ButtonSt {...Props}>
      {Props.children}
    </ButtonSt>
  )
}

export default Button;