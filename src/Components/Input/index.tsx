import React, { InputHTMLAttributes } from 'react';
import { InputSt } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  
}

const Input = (Props: InputProps) => {
  
  return (
    <InputSt {...Props} />
  )
}

export default Input;