import React from 'react';
import { MdMoreHoriz, MdVideoCall, MdSearch } from 'react-icons/md'
import Button from '../Button';

import { ContatosSt, FlexSt, ContatoUsersSt } from './styles'

const Contatos = () => {

  return (
    <ContatosSt>
      <FlexSt>
        <h4>Contatos</h4>
        
        <Button className='bt-more'><MdVideoCall className='ico' /></Button>
        <Button className='bt-more'><MdSearch className='ico' /></Button>
        <Button className='bt-more'><MdMoreHoriz className='ico' /></Button>
      </FlexSt>
      <ContatoUsersSt>
        <Button className='bt-user'>
          <img src="https://cdn.pixabay.com/photo/2020/04/11/05/21/boots-5028821_960_720.jpg" alt="" />
          <h4>Username</h4>
        </Button>
        <Button className='bt-user'>
          <img src="https://cdn.pixabay.com/photo/2020/04/11/05/21/boots-5028821_960_720.jpg" alt="" />
          <h4>Username</h4>
        </Button>
        <Button className='bt-user'>
          <img src="https://cdn.pixabay.com/photo/2020/04/11/05/21/boots-5028821_960_720.jpg" alt="" />
          <h4>Username</h4>
        </Button>
        <Button className='bt-user'>
          <img src="https://cdn.pixabay.com/photo/2020/04/11/05/21/boots-5028821_960_720.jpg" alt="" />
          <h4>Username</h4>
        </Button>
        <Button className='bt-user'>
          <img src="https://cdn.pixabay.com/photo/2020/04/11/05/21/boots-5028821_960_720.jpg" alt="" />
          <h4>Username</h4>
        </Button>
        <Button className='bt-user'>
          <img src="https://cdn.pixabay.com/photo/2020/04/11/05/21/boots-5028821_960_720.jpg" alt="" />
          <h4>Username</h4>
        </Button>
      </ContatoUsersSt>
    </ContatosSt>
  )
}

export default Contatos;