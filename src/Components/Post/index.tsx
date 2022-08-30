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


interface PostProps {
  perfilImage?: string;
  perfilImageAlt?: string;
  perfilName?: string;
  postData?: string;
  postTime?: string;
  postImage?: string;
  postImageAlt?: string;
  postLikes?: string;
  postComments?: string;
  postShares?: string;
}

const Post = (Props: PostProps) => {

  const [comment, setComment] = React.useState(false);


  return (
    <PostSt {...Props}>
      <PostHeaderSt>
        <div className="flex">
          <img src={Props.perfilImage} alt={Props.perfilImageAlt} />
          <BlockSt>
            <h4>{Props.perfilName}</h4>
            <div className='flex-p'>{Props.postData} às {Props.postTime}  <FaUserFriends /> </div>
          </BlockSt>

        </div>
        <Button className='btn-more'><FiMoreHorizontal /></Button>
      </PostHeaderSt>
      <ImageSt>
        <img src={Props.postImage} alt={Props.postImageAlt} />
      </ImageSt>
      <PostFooterSt>
        <FlexSt>
          <FlexSt className='like'>
            <Button><Icon><AiFillLike /></Icon></Button>
            <Button><Iconb><BsFillHeartFill /></Iconb></Button>
            <p>{Props.postLikes}</p>
          </FlexSt>
          <p>{Props.postComments} comentarios</p>
          <p>{Props.postShares} compartilhamentos</p>
        </FlexSt>
        <Hr className='hr' width='98%' />
        <FlexSt>
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
          <Button className='btn2'>
            <img src="https://i.postimg.cc/brczWrGr/richardsilva.jpg" alt="" />
            <IoMdArrowDropdown />
          </Button>
        </FlexSt>
      </PostFooterSt>
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
    </PostSt>
  )
}
export default Post;