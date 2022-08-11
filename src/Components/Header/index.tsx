import React from 'react';

import { HeaderSt } from './styles'

import Button from '../Button';

import Navbar from '../Navbar'

const Header = () => {
  return (
    <HeaderSt>
      <Navbar />
      <Button color="#ff0000">Element</Button>
    </HeaderSt>
  )
}

export default Header;