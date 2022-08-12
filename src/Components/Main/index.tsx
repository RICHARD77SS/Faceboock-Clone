import React from 'react';

import { MainSt } from './styles';
import MainLeft from '../MainLeft';
import MainCenter from '../MainCenter';
import MainRight from '../MainRight';


const Main = () => {
  return (
    <MainSt>
      <MainLeft />
      <MainCenter />
      <MainRight />
    </MainSt>
  )
}

export default Main;