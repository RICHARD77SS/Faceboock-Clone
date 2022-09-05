import React from 'react';

import { ShowCardSt, CardModalSt } from './styles';

import Button from '../Button';

interface PropsCard {
  cardBackground?: string;
  cardTemporadas?: string;
  cardEpisodios?: string;
  cardModalFollows?: string;
  cardModalTitle?: string;
  cardModalDescription?: string;
}
const ShowCard = (Props: PropsCard) => {
  return (
    <>
      <ShowCardSt {...Props} >
        <img src={Props.cardBackground} alt='' className="child" />
        
        <CardModalSt className='card-modal'>
          <p>{Props.cardModalFollows} seguidores</p>
          <p>{Props.cardTemporadas} Temporada</p>
          <p>{Props.cardEpisodios} episódios</p>
          <h3>{Props.cardModalTitle}</h3>
          <span>{Props.cardModalDescription}</span>

          <Button>Assistir agora</Button>
        </CardModalSt>
      </ShowCardSt>
    </>
  )
}

export default ShowCard;