import React from 'react';

import { MainCenterSt } from './styles';
import MainTabs from '../MainTabs';
import MakePub from '../MakePub';
const MainCenter = () => {
  return (
    <MainCenterSt>
      <MainTabs />
      <MakePub />
    </MainCenterSt>
  )
}

export default MainCenter;