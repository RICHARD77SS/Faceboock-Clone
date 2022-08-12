import React from 'react';

import {AiOutlineClose} from 'react-icons/ai'

import { MainRightSt, GruposSt, GrupoDescSt, GrupoImgSt, GrupoTitleSt, PatrocinioSt } from './styles';
import Button from '../Button';


const MainRight = () => {
  return (
    <MainRightSt>
      <GruposSt>
        <GrupoDescSt>
          <img  src='https://i.postimg.cc/SRCKxC0c/grupos.png' alt='' />
          <div className="block">
            <h4>Grupos</h4>
            <p className='gp-desc'>Sugestões para você</p>
          </div>
          <Button className='close-button' ><AiOutlineClose /></Button>
        </GrupoDescSt>
        <GrupoImgSt>
          <img src="" alt="" />
        </GrupoImgSt>
        <GrupoTitleSt>
          <span className='gp-name'>Grup name</span>
          <p className='gp-info'>5 mil membros . 5 publicações por dia</p>
          <Button className='gp-button'>Participar do grupo</Button>
        </GrupoTitleSt>
      </GruposSt>
      <PatrocinioSt>

      </PatrocinioSt>
    </MainRightSt>
  )
}

export default MainRight;
