import React from 'react';

import { Video, Infos, User } from './styles';

interface VideoProps {
  id?: string;
  image?: string;
  title?: string;
  userImage?: string;
  userName?: string;
}

const VideoSuggest = (Props:VideoProps) => {
  return (
      <Video id={Props.id}>
        <img src={Props.image} alt="" />
        <Infos>
          <h4>{Props.title}</h4>
          <User>
            <img src={Props.userImage} alt="" />
            <p>{Props.userName}</p>
          </User>
        </Infos>
      </Video>
  )
}

export default VideoSuggest;