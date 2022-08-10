import React from 'react';

import { HeaderSt } from './styles'

import Button from '../Button';
const Header: React.FC = () => {
  return (
    <HeaderSt>
      <Button color="#ff0000">Element</Button>
    </HeaderSt>
  )
}

export default Header;