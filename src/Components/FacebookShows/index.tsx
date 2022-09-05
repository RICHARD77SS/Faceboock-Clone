import React from 'react';

import { FacebookShowsSt } from './styles';
import ShowCard from '../ShowCard';
import FacebookInfo from './FacebookInfos.json';

const FacebookShows = () => {
  return (
    <FacebookShowsSt>
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
    </FacebookShowsSt>
  )
}

export default FacebookShows;