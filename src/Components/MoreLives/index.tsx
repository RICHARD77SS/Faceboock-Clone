import React from 'react';


import { MoreLivesSt, ContainerLivesSt, Block1St } from './styles';

import LiveItem from '../LiveItem';

import LiveInfos from './LiveInfos.json';

const MoreLives = () => {
  return (
    <MoreLivesSt>
      <Block1St>
        <h3>Páginas que você segue</h3>
        <ContainerLivesSt>
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
          
        </ContainerLivesSt>
      </Block1St>
    </MoreLivesSt>
  )
}

export default MoreLives;