import React from 'react';

import { MainCenterSt } from './styles';
import MainTabs from '../MainTabs';
import MakePub from '../MakePub';
import Postagems from '../Postagems';
const MainCenter = () => {
  return (
    <MainCenterSt>
      <MainTabs />
      <MakePub />
      <Postagems />
    </MainCenterSt>
  )
}

export default MainCenter;