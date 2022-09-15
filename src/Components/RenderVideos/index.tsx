import React from 'react';

import ViewVideo from '../ViewVideo';
import VideosInfos from './VideosInfos.json';

const WatchHome = () => {

  return (
    <>
      {VideosInfos.map((Infos) => {
        return (
          <ViewVideo userImage={Infos.userImage}
            userName={Infos.userName}
            dataPost={Infos.dataPost}
            titlePost={Infos.titlePost}
            descriptionPost={Infos.descriptionPost}
            videoPost={Infos.videoPost}
          />
        )
      })}

    </>
  )
}

export default WatchHome;