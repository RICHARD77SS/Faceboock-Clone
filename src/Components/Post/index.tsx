import React from 'react';
import { FaUserFriends, FaRegCommentAlt } from 'react-icons/fa';
import { FiMoreHorizontal } from 'react-icons/fi';
import { RiShareForwardLine } from 'react-icons/ri';
import { BiLike, BiBookmarkAlt, BiRadioCircleMarked } from 'react-icons/bi';
import { BsFillHeartFill, BsEmojiSmile, BsCamera } from 'react-icons/bs';
import { IoMdArrowDropdown } from 'react-icons/io';
import { AiFillLike } from 'react-icons/ai';
import { MdOutlineGif } from 'react-icons/md';
import { PostSt, PostHeaderSt, ImageSt, PostFooterSt, FlexSt, BlockSt, Icon, Iconb, PostCommentSt, InputsSt, InsertsSt } from './styles';

import Input from '../Input';
import Button from '../Button';
import Hr from '../Hr';

const Post = () => {
  
  const [comment, setComment] = React.useState(false);


  return (
    <PostSt>
      <PostHeaderSt>
        <div className="flex">
          <img src="https://i.postimg.cc/brczWrGr/richardsilva.jpg" alt="usuario" />
          <BlockSt>
            <h4>Richard Silva</h4>
            <p>20 de agosto às 19:00 <FaUserFriends /></p>
          </BlockSt>

        </div>
        <Button className='btn-more'><FiMoreHorizontal /></Button>
      </PostHeaderSt>
      <ImageSt>
        <img src="" alt="" />
      </ImageSt>
      <PostFooterSt>
        <FlexSt>
          <FlexSt className='icons-reaction'>
            <Button><Icon><AiFillLike /></Icon></Button>
            <Button><Iconb><BsFillHeartFill /></Iconb></Button>

          </FlexSt>
          <p>2 comentarios</p> 
          <p>3 compartilhamentos</p>
        </FlexSt>
        <Hr className='hr' width='98%' />
        <FlexSt>
          <Button className='btn'>
            <BiLike />
            <p>Curtir</p>
          </Button>
          <Button className='btn' onClick={()=>{setComment(true)}}>
            <FaRegCommentAlt />
            <p>Comentar</p>
          </Button>
          <Button className='btn'>
            <RiShareForwardLine />
            <p>Compartilhar</p>
          </Button>
          <Button className='btn2'>
            <img src="https://i.postimg.cc/brczWrGr/richardsilva.jpg" alt="" />
            <IoMdArrowDropdown />
          </Button>
        </FlexSt>
      </PostFooterSt>
      {comment?
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
      </>: null}
    </PostSt>
  )
}
export default Post;