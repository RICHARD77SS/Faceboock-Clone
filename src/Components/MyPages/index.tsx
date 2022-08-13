import React from 'react';
import { MdMoreHoriz } from 'react-icons/md'; 

import { MyPagesSt, FlexSt } from './styles'

import Button from '../Button';
import { BsMegaphone } from 'react-icons/bs'
const MyPages = () => {
  return (
    <MyPagesSt>
      <FlexSt>
        <h4>Suas Páginas e perfis</h4>
        <Button className='bt-more'><MdMoreHoriz /></Button>
      </FlexSt>
      <Button className='bt-promo'>
        <img src="https://img.freepik.com/vetores-gratis/laptop-com-icone-de-codigo-isometrico-de-programa-desenvolvimento-de-software-e-aplicacoes-de-programacao-neon-escuro_39422-971.jpg?w=360&t=st=1660402263~exp=1660402863~hmac=397152a041e83ab1de0a42257ef10e0f76bd5b1ab9628c9b6bf1859a048955e8" alt="" />
        <h5>Dev/NamePage</h5>
      </Button>
      <Button className='bt-promo'>
        <BsMegaphone className='ico' size='17' />
        <p>Criar promoção</p>
      </Button>
    </MyPagesSt>
  )
}

export default MyPages;