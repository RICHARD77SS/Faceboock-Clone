import React from 'react';


import {BiWorld} from 'react-icons/bi';
import { FiMoreHorizontal } from 'react-icons/fi';
import { FaRegCommentAlt } from 'react-icons/fa';
import { RiShareForwardLine } from 'react-icons/ri';
import { BiLike, BiBookmarkAlt, BiRadioCircleMarked } from 'react-icons/bi';
import { BsEmojiSmile, BsCamera } from 'react-icons/bs';
import { MdOutlineGif } from 'react-icons/md';
import { WatchPostSt, PostTopSt, Flex1St, Block1St, PostContentSt, PostBottomSt, InsertsSt, InputsSt, PostCommentSt } from './styles';
import Input from '../Input';
import Button from '../Button';

const WatchHome = () => {
  const [comment, setComment] = React.useState(false);
  return (
    <WatchPostSt>
      <PostTopSt>
        <Flex1St>
          <img src="https://img.freepik.com/psd-gratuitas/uau-efeito-de-texto-em-quadrinhos_125540-1674.jpg?w=740&t=st=1662062785~exp=1662063385~hmac=c0b6949075dca0983a97fd417c31e3e5f26063d771ef9848e64c39134701ce88" alt="" />
          <Block1St>
            <h4>Username <a href="/">Seguir</a> </h4>
            <div className="p">12 de agosto <BiWorld /></div>
          </Block1St>
          <Button className="btn-config"><FiMoreHorizontal /></Button>
        </Flex1St>
        <h3>Title for post</h3>
      </PostTopSt>
      <PostContentSt>

      </PostContentSt>
      <PostBottomSt>
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
      </PostBottomSt>
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
    </WatchPostSt>
  )
}

export default WatchHome;