import React from 'react';

import { WatchShowsSt, FollowsShowsSt, FacebookShowsSt } from './styles';
import FacebookShows from '../FacebookShows';
import FriendsShows from '../FriendsShows';

const WhatchShows = () => {
  return (
    <WatchShowsSt>
      <h3>Programas que os amigos estão seguindo</h3>
      <FollowsShowsSt>
        <FriendsShows />
      </FollowsShowsSt>
      <h3>Conteúdo original do Facebook</h3>
      <FacebookShowsSt>
        <FacebookShows />
      </FacebookShowsSt>
    </WatchShowsSt>
  )
}

export default WhatchShows;