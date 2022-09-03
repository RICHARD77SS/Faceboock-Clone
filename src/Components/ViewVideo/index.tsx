import React from 'react';


import { BiWorld } from 'react-icons/bi';
import { FiMoreHorizontal } from 'react-icons/fi';
import { FaRegCommentAlt } from 'react-icons/fa';
import { RiShareForwardLine } from 'react-icons/ri';
import { BiLike, BiBookmarkAlt, BiRadioCircleMarked } from 'react-icons/bi';
import { BsEmojiSmile, BsCamera } from 'react-icons/bs';
import { MdOutlineGif } from 'react-icons/md';
import { WatchPostSt, PostTopSt, Flex1St, Block1St, PostContentSt, PostBottomSt, InsertsSt, InputsSt, PostCommentSt, DivSt } from './styles';
import Input from '../Input';
import Button from '../Button';

interface VideoProps {
  userImage?: string;
  userImageAlt?: string;
  userName?: string;
  dataPost?: string;
  titlePost?: string;
  descriptionPost?: string;
  videoPost?: string;
}

const ViewVideo = (Props:VideoProps) => {
  const [comment, setComment] = React.useState(false);
  return (
    <>
      <WatchPostSt {...Props}>
        <PostTopSt>
          <Flex1St>
            <img src={Props.userImage} alt={Props.userImageAlt} />
            <Block1St>
              <h4>{Props.userName} <a href="/">Seguir</a> </h4>
              <DivSt>{Props.dataPost}<BiWorld className='bi' /></DivSt>
            </Block1St>
            <Button className="btn-config"><FiMoreHorizontal /></Button>
          </Flex1St>
          <h3>{Props.titlePost}</h3>
          <p>{Props.descriptionPost}</p>
        </PostTopSt>
        <PostContentSt>
          <video width="100%" height='100%' controls src={Props.videoPost}></video>
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
    </>
  )
}

export default ViewVideo;