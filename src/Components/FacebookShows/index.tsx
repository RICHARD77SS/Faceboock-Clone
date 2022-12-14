import React from 'react';

import ShowCard from '../ShowCard';
import FacebookInfo from './FacebookInfos.json';

const FacebookShows = () => {
  return (
    <>
      {FacebookInfo.map((Infos) => {
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

export default FacebookShows;