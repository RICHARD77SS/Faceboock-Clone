import React from 'react';

import { ReelsViwSt } from './styles';
import Reels from '../Reels';
import infoReels from './infoReels.json';


const ReelsViw = () => {
  return (
    <ReelsViwSt>
      {infoReels.map((Infos) => {
        return (
          <>
            <Reels reelsImage={Infos.reelsImg} reelsImageAlt={Infos.reelsImgAlt} reelsViews={Infos.reelsViews} reelsHref={Infos.reelsHref} />
          </>
        )
      })}
    </ReelsViwSt>
  )
}

export default ReelsViw;