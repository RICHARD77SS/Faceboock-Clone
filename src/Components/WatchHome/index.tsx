import React from 'react';

import NewVideos from '../NewVideos';
import RenderVideos from '../RenderVideos';
import { WatchPostSt } from './styles';

const WatchHome = () => {

  return (
    <WatchPostSt>
      <NewVideos />
      <RenderVideos />
    </WatchPostSt>
  )
}

export default WatchHome;