import React from 'react';

import { ShowCardSt, CardModalSt, ContainerSt } from './styles';

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
    <ContainerSt>
      <ShowCardSt className='s-cards' {...Props} >
        <img src={Props.cardBackground} alt='' className="child" />
        
      </ShowCardSt>
      <CardModalSt className='card-modal'>
        <div className="flex">
          <p>{Props.cardModalFollows} seguidores</p>
          <p>{Props.cardTemporadas} Temporada</p>
          <p>{Props.cardEpisodios} episódios</p>

        </div>
          <h3>{Props.cardModalTitle}</h3>
          <span>{Props.cardModalDescription}</span>

          <Button>Assistir agora</Button>
      </CardModalSt>
    </ContainerSt>
  )
}

export default ShowCard;