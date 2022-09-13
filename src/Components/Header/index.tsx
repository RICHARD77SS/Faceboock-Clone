import React from 'react';

import { HeaderSt, Container } from './styles'


import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <Container>
      <HeaderSt>
        <Navbar />
      </HeaderSt>
      <Outlet />
    </Container>
  )
}

export default Header;