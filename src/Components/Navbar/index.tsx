import React from 'react';
import { NavbarSt } from './styles';

import NavMore from '../NavMore';
import NavLeft from '../NavLeft';
import NavMenu from '../NavMenu';
import NavRight from '../NavRight';


const Navbar = () => {
  return (
    <NavbarSt>
      <NavLeft />
      <NavMenu />
      <NavMore />
      <NavRight />
    </NavbarSt>
  )
}

export default Navbar;