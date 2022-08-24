import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import { ModalReelsSt, ReelsNavLeftSt, ReelsNavCenterSt, ReelsBlockSt, ReelsTopSt, ReelsContentSt, ReelsRightSt, ReelsNavRightSt, DivIconSt, DivIco, DivIcob } from './styles';
import { FaCommentAlt } from 'react-icons/fa';
import { FiMoreHorizontal } from 'react-icons/fi';
import { BsFillPlayFill } from 'react-icons/bs';
import { BiWorld } from 'react-icons/bi';
import { GiSpeaker } from 'react-icons/gi';
import { AiFillLike, AiFillCaretRight } from 'react-icons/ai';
import { RiShareForwardFill } from 'react-icons/ri';
import NavRight from '../NavRight';

import Logo from '../Logo';

const ModalReels = () => {

  return (
    <ModalReelsSt>
      <ReelsNavLeftSt>
        <Logo />
      </ReelsNavLeftSt>
      <ReelsNavCenterSt>
        <ReelsTopSt>
          <img src='https://i.postimg.cc/brczWrGr/richardsilva.jpg' alt='' />
          <ReelsBlockSt>
            <h5><span>Richard Santos</span> .Seguir</h5>
            <div className='flex'>
              <Tooltip title='Publico'>
                <div className="">
                  <BiWorld size='15' />
                </div>
              </Tooltip>
              Público</div>
          </ReelsBlockSt>
          <Tooltip title='Reproduzir'>
            <div className="">
              <BsFillPlayFill size='30' />
            </div>
          </Tooltip>
          <Tooltip title='Silenciar'>
            <div className="">
              <GiSpeaker size='30' />
            </div>
          </Tooltip>
        </ReelsTopSt>
        <ReelsContentSt>
          <img className='img-reels' src="https://img.freepik.com/vetores-gratis/astronauta-bonito-dabbing-ilustracao-do-icone-dos-desenhos-animados-icone-de-ciencia-espacial-isolado-estilo-flat-cartoon_138676-3101.jpg?w=740&t=st=1661383441~exp=1661384041~hmac=33f5193304f2c53063b97f68896906a9d1da59491a0fe60830f7a14618f27325" alt="" />
        </ReelsContentSt>
      </ReelsNavCenterSt>
      <ReelsRightSt>
        <DivIcob>
          <AiFillCaretRight />
        </DivIcob>
        <DivIco>
          <AiFillLike size='25' />
        </DivIco>
        <p>24,4 mil</p>
        <DivIco>
          <FaCommentAlt size='18' />
        </DivIco>
        <p>4,3 mil</p>
        <DivIco>
          <RiShareForwardFill size='28' />
        </DivIco>
        <p>2,1 mil</p>
        <Tooltip title='Mais'>
          <DivIco>
            <FiMoreHorizontal size='25' />
          </DivIco>
        </Tooltip>
      </ReelsRightSt>
      <ReelsNavRightSt>
        <DivIconSt>
          <NavRight />

        </DivIconSt>
      </ReelsNavRightSt>
    </ModalReelsSt>

  )
}

export default ModalReels;