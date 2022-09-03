import React from 'react';

import { WatchShowsSt, FollowsShowsSt, FacebookShowsSt, ShowCardSt } from './styles';

import Button from '../Button';

const WhatchShows = () => {
  return (
    <WatchShowsSt>
      <h3>Programas que os amigos estão seguindo</h3>
      <FollowsShowsSt>
        <Button>
          <ShowCardSt />
        </Button>
      </FollowsShowsSt>
      <h3>Conteúdo original do Facebook</h3>
      <FacebookShowsSt>
        <ShowCardSt />
      </FacebookShowsSt>
    </WatchShowsSt>
  )
}

export default WhatchShows;