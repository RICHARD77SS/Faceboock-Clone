import React from 'react'
import Button from '../Button';

import { MoreLikeThisSt, VideoItem, Image, Duration, Infos } from './styles'
import { FiMoreHorizontal } from 'react-icons/fi';

const MoreLikeThis = () => {
  return (
    <MoreLikeThisSt id='btn-4' className='content'>
      <VideoItem>
        <Image>
          <img src="" alt="" />
          <Duration>
            1:22:22
          </Duration>
        </Image>
        <Infos>
          <h4>Video Name</h4>
          <span>User Name</span>
          <p>Há 20 horas 7,3 mi</p>
        </Infos>
        <Button><FiMoreHorizontal /></Button>
      </VideoItem>
    </MoreLikeThisSt>
  )
}

export default MoreLikeThis;