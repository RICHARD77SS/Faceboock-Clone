import React from 'react';

import { WatchShowsSt, FollowsShowsSt, FacebookShowsSt, Container } from './styles';
import FacebookShows from '../FacebookShows';
import FriendsShows from '../FriendsShows';
import WatchTopNav from '../WatchTopNav';

const WhatchShows = () => {
  return (
    <Container>
      <WatchTopNav className='topnav' />
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
    </Container>
  )
}

export default WhatchShows;