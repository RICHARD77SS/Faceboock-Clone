import React from 'react';

import NewVideos from '../NewVideos';
import RenderVideos from '../RenderVideos';
import { WatchPostSt } from './styles';
import WatchTopNav from '../WatchTopNav';

const WatchHome = () => {

  return (
    <WatchPostSt>
      <WatchTopNav className='topnav' />
      <NewVideos />
      <RenderVideos />
    </WatchPostSt>
  )
}

export default WatchHome;