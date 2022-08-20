import React from 'react';
import { NavbarSt } from './styles';

import NavLeft from '../NavLeft';
import NavMenu from '../NavMenu';
import NavRight from '../NavRight';


const Navbar = () => {
  return (
    <NavbarSt>
      <NavLeft />
      <NavMenu />
      <NavRight />
    </NavbarSt>
  )
}

export default Navbar;