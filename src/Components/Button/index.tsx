import React from 'react';

import { ButtonSt } from './styles'

interface ButtonProps {
  children?: React.ReactNode;

  name?: string;
  type?: "button" | "submit" | "reset";
  onclick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;

  color?: string;
  background?: string;

  width?: string;
  height?: string;
  margin?: string;
  padding?: string;

  border?: string;
  radius?: string;
}

const Button = (Props: ButtonProps) => {
  return (
    <ButtonSt {...Props}>
      {Props.children}
    </ButtonSt>
  )
}

export default Button;