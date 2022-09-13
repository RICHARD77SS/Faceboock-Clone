import React from 'react';


import { MoreLivesSt, LiveListSt, Block1St } from './styles';

import LiveItem from '../LiveItem';

import LiveInfos from './LiveInfos.json';
import Button from '../Button';

const MoreLives = () => {
  return (
    <MoreLivesSt>
      <Block1St>
        <h3>Páginas que você segue</h3>
        <LiveListSt>
          {LiveInfos.map((Infos) => {
            return (
              <LiveItem liveAvaliation={Infos.liveAvaliation}
                liveIn={Infos.liveIn}
                liveWatching={Infos.liveWatching}
                liveImage={Infos.liveImage}
                liveTitle={Infos.liveTitle}
                userImage={Infos.userImage}
                userName={Infos.userName}
              />
            )
          })}
        </LiveListSt>
        <Button className='btn-more'> Ver mais</Button>
      </Block1St>
    </MoreLivesSt>
  )
}

export default MoreLives;