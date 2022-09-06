import React from 'react';


import ShowCard from '../ShowCard';
import FriendsInfos from './FriendsInfos.json';

const FriendsShows = () => {
  return (
    <>
      {FriendsInfos.map((Infos) => {
        return (
          <ShowCard cardBackground={Infos.cardBackground}
            cardTemporadas={Infos.cardTemporadas}
            cardEpisodios={Infos.cardEpisodios}
            cardModalFollows={Infos.cardModalFollows}
            cardModalTitle={Infos.cardModalTitle}
            cardModalDescription={Infos.cardModalDescription}
          />

        )
      })}
    </>
  )
}

export default FriendsShows;