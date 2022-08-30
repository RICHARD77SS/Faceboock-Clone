import React from 'react';

import { StorysViwsSt } from './styles';
import StorysInfos from './StorysInfos.json';

import FriendStory from '../FriendStory';


const StorysViws = () => {
  return (
    <StorysViwsSt>
      {StorysInfos.map((Infos) => {
        return (
          <>
            <FriendStory storyImage={Infos.storyImage} 
              storyPerfilImage={Infos.storyPerfilImage}
              storyPerfilImageAlt={Infos.storyPerfilImageAlt}
              storyPerfilName={Infos.storyPerfilName}
            />
          </>
        )
      })}
    </StorysViwsSt>
  )
}


export default StorysViws;


