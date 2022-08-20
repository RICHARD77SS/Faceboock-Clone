import React from 'react';
import { FaUserFriends } from 'react-icons/fa';
import { FiMoreHorizontal } from 'react-icons/fi';

import { PostSt, PostHeaderSt, ImageSt, PostFooterSt } from './styles';

import Button from '../Button';

const Post = () => {
  return (
    <PostSt>
      <PostHeaderSt>
        <img src="" alt="usuario" />
        <div className="block">
          <h4>Richard Silva</h4>
          <p>20 de agosto às 19:00 <FaUserFriends /></p>
        </div>
        <Button className='btn-more'><FiMoreHorizontal /></Button>
      </PostHeaderSt>
      <ImageSt>
        <img src="" alt="" />
      </ImageSt>
      <PostFooterSt>
        <div className="flex-info">
          <div className="likes"></div>
          <div className="comentarios"></div>
          <div className="compartilhamentos"></div>
        </div>
        <div className="flex-input">
          <div className="curtir"></div>
          <div className="comentar"></div>
          <div className="compartilhar"></div>
          <div className="conta"></div>
        </div>
      </PostFooterSt>
    </PostSt>
  )
}
export default Post;