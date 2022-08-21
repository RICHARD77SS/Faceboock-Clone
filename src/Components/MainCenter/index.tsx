import React from 'react';

import { MainCenterSt } from './styles';
import MainTabs from '../MainTabs';
import MakePub from '../MakePub';
import Post from '../Post';
const MainCenter = () => {
  return (
    <MainCenterSt>
      <MainTabs />
      <MakePub />
      <Post />
    </MainCenterSt>
  )
}

export default MainCenter;