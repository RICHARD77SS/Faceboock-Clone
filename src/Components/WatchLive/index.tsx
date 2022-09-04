import React from 'react';
import Input from '../Input';
import Button from '../Button';

import { MdVisibility } from 'react-icons/md';
import { FiMoreHorizontal } from 'react-icons/fi';
import { FaRegCommentAlt } from 'react-icons/fa';
import { RiShareForwardLine } from 'react-icons/ri';
import { BiLike, BiBookmarkAlt, BiRadioCircleMarked } from 'react-icons/bi';
import { BsEmojiSmile, BsCamera } from 'react-icons/bs';
import { MdOutlineGif } from 'react-icons/md';

import { WatchLiveSt, LiveViewSt, LiveTopSt, LiveContentSt, LiveBottomSt, BlockSt, LiveViewBottomSt, PostCommentSt, InputsSt, InsertsSt } from './styles';
import MoreLives from '../MoreLives';

export const WatchLive = () => {
  const [comment, setComment] = React.useState(false);
  return(
    <WatchLiveSt>
      <LiveViewSt>
        <LiveTopSt>
          <Button>
            <div className="live">AO VIVO</div>
            <div className="views"><MdVisibility /> 2399</div>
          </Button>
          <Button className='btn-options'>
            <FiMoreHorizontal />
          </Button>
        </LiveTopSt>
        <LiveContentSt>
          <video src=""></video>
        </LiveContentSt>
        <LiveBottomSt>
          <img src="https://img.freepik.com/vetores-gratis/cao-bonito-enfiando-a-lingua-para-fora-ilustracao-do-icone-dos-desenhos-animados_138676-2709.jpg?w=740&t=st=1662140788~exp=1662141388~hmac=de24c5a7eee813bc20233b227a5b0c3adf44fce5c0613e10b25c56cf3ead9112" alt="" />
          <BlockSt>
            <a href="/">User Name</a>
            <a href="/">User Page</a>
          </BlockSt>
        </LiveBottomSt>
        <LiveViewBottomSt>
          <Button className='btn'>
            <BiLike />
            <p>Curtir</p>
          </Button>
          <Button className='btn' onClick={() => { setComment(true) }}>
            <FaRegCommentAlt />
            <p>Comentar</p>
          </Button>
          <Button className='btn'>
            <RiShareForwardLine />
            <p>Compartilhar</p>
          </Button>
        </LiveViewBottomSt>
        {comment ?
          <>
            <PostCommentSt>
              <InputsSt>
                <img src="https://i.postimg.cc/brczWrGr/richardsilva.jpg" alt="usuario" />
                <Input className='input' placeholder='  Escreva um comentario...' type='text' />
                <InsertsSt>
                  <Button className='btn-ico'>
                    <BiRadioCircleMarked className='ico' />
                  </Button>
                  <Button className='btn-ico'>
                    <BsEmojiSmile className='ico' />
                  </Button>
                  <Button className='btn-ico'>
                    <BsCamera className='ico' />
                  </Button>
                  <Button className='btn-ico'>
                    <MdOutlineGif className='ico' />
                  </Button>
                  <Button className='btn-ico'>
                    <BiBookmarkAlt className='ico' />
                  </Button>
                </InsertsSt>
              </InputsSt>
            </PostCommentSt>
          </> : null}
      </LiveViewSt>
      <MoreLives />
    </WatchLiveSt>
  )
}

export default WatchLive;