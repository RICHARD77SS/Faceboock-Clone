import React from 'react';

import { GrPrevious, GrNext } from 'react-icons/gr';
import { SalasSt } from './styles';
import Button from '../Button';
import CriarSala from '../CriarSala';
import SalaList from '../SalaList';

const Salas = () => {
  const goLeft = () => {
    let slide = document.getElementById('slider');
    slide!.scrollLeft += 300;
  };
  const goRight = () => {
    let slide = document.getElementById('slider');
    slide!.scrollLeft -= 300;
  };
  return (
    <SalasSt id='slider'>
      <Button className='btn prev' onClick={() => { goRight() }}>
        <GrPrevious size='20' />
      </Button>
      <CriarSala />
      <SalaList />
      <Button className='btn next' onClick={() => { goLeft() }}>
        <GrNext size='20' />
      </Button>
    </SalasSt>
  )
} 

export default Salas;