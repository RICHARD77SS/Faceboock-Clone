import React from 'react';
import { FaUserFriends, FaRegCommentAlt } from 'react-icons/fa';
import { FiMoreHorizontal } from 'react-icons/fi';
import { RiShareForwardLine } from 'react-icons/ri';
import { BiLike } from 'react-icons/bi';
import { BsFillHeartFill } from 'react-icons/bs';
import { IoMdArrowDropdown } from 'react-icons/io';
import { AiFillLike } from 'react-icons/ai';
import { PostSt, PostHeaderSt, ImageSt, PostFooterSt, FlexSt, BlockSt, Icon, Iconb } from './styles';

import Button from '../Button';
import Hr from '../Hr';

const Post = () => {
  return (
    <PostSt>
      <PostHeaderSt>
        <img src="https://i.postimg.cc/brczWrGr/richardsilva.jpg" alt="usuario" />
        <BlockSt>
          <h4>Richard Silva</h4>
          <p>20 de agosto às 19:00 <FaUserFriends /></p>
        </BlockSt>
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
          <Button className='btn'>
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
    </PostSt>
  )
}
export default Post;