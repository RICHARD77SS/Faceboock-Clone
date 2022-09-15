import React from 'react'
import Button from '../Button';

import { VideoItem, Image, Duration, Infos } from './styles'
import { FiMoreHorizontal } from 'react-icons/fi';

interface VideoProps {
  image?: string;
  duration?: number;
  title?: string;
  userName?: string;
  data?: number;
  views?: number;
}


const MoreLikeThis = (Props: VideoProps) => {
  return (
        <VideoItem>
          <Image>
            <img src={Props.image} alt="" />
            <Duration>
              {Props.duration}
            </Duration>
          </Image>
          <Infos>
            <h4>{Props.title}</h4>
            <span>{Props.userName}</span>
            <p>Há {Props.data} horas {Props.views} mi</p>
          </Infos>
          <Button><FiMoreHorizontal /></Button>
        </VideoItem>
  )
}

export default MoreLikeThis;