import React from 'react';

import { ContatoSt } from './styles'

import Button from '../Button';

interface contatoProps {
  id?: string;
  name?: string;
  image?: string;
  function?: any;
}

const Contato = (Props: contatoProps) => {
  return (
    <ContatoSt {...Props}>
      <Button id={Props.id} className='bt-user' onClick={Props.function}>
        <img src={Props.image} alt="" />
        <h4>{Props.name}</h4>
      </Button>
    </ContatoSt>
  )
}

export default Contato;