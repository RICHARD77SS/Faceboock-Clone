import React from 'react';

import { MdVisibility } from 'react-icons/md';
import { FiMoreHorizontal } from 'react-icons/fi';
import {  BlockSt,  CardLiveSt, LiveConteinerSt, LiveTopSt, FlexSt, AvaliationSt } from './styles';
import Button from '../Button';
import { BiLike } from 'react-icons/bi';

interface LivesProps {
  liveIn?: boolean;
  liveWatching?: number;
  liveImage?: string;
  liveTitle?: string;
  liveAvaliation?: string;

  userImage?: string;
  userName?: string;
}

const LiveItem = (Props: LivesProps) => {
  return (
    <CardLiveSt>
      <LiveTopSt>
        <Button>
          {Props.liveIn ?
            <>
              <div className="live">AO VIVO</div>
              <div className="views"><MdVisibility />{Props.liveWatching}</div>
            </>
            : null}

        </Button>
        <Button className='btn-options'>
          <FiMoreHorizontal />
        </Button>
      </LiveTopSt>
      <LiveConteinerSt>
        <img src={Props.liveImage} alt="" />
      </LiveConteinerSt>
      <FlexSt>
        <img src={Props.userImage} alt="" />
        <BlockSt>
          <h4>{Props.liveTitle}</h4>
          <p>{Props.userName}</p>
          <AvaliationSt><BiLike />{Props.liveAvaliation}</AvaliationSt>
        </BlockSt>
      </FlexSt>
    </CardLiveSt>
  )
}

export default LiveItem;