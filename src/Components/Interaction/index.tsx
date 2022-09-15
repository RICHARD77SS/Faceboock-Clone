import React from 'react';
import Button from '../Button';
import { AiOutlineLike } from 'react-icons/ai';
import { GoComment } from 'react-icons/go';
import { RiShareForwardLine } from 'react-icons/ri';
import { InteractionsSt } from './styles';
const Interaction = () => {
  return (
    <InteractionsSt>
      <Button>
        <AiOutlineLike />
        <p>Curtir</p>
      </Button>
      <Button>
        <GoComment />
        <p>Comentar</p>
      </Button>
      <Button>
        <RiShareForwardLine />
        <p>Compartilhar</p>
      </Button>
    </InteractionsSt>
  )
}

export default Interaction;