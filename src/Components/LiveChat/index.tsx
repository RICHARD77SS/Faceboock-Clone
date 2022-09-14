import React from 'react';

import { LiveChatSt, Comments, Post, BlockMess, Mess, MessInteractions, ChatFooter, HelpOwner, FixedMess, Support, BlockSup, ProgressBar, Icondiv, CommentArea, InputReactions, Icon } from './styles';
import { RiShareForwardLine } from 'react-icons/ri';
import { AiOutlineLike, AiOutlineStar } from 'react-icons/ai';
import { BiNote } from 'react-icons/bi';
import { BsEmojiSmile } from 'react-icons/bs';
import Input from './../Input/index';
import { IoMdArrowDropdown, IoIosArrowForward } from 'react-icons/io';

const LiveChat = () => {
  return (
    <LiveChatSt id='btn-2' className='content'>
      <Comments>
        <Post>
          <img src="" alt="" />
          <BlockMess>
            <Mess>
              <h4>Username</h4>
              <p>comment for this video</p>
            </Mess>
            <MessInteractions>
              <p>Curtir</p>
              <p>Responder</p>
              <p>10 min</p>
            </MessInteractions>
          </BlockMess>
        </Post>
      </Comments>
      <ChatFooter>
        <HelpOwner>
          <FixedMess>
            <img src="" alt="" />
            <Icon>
              <img src="https://i.postimg.cc/vmFmxnfs/like.png" alt="Like Icon by Icon Mafia on IconScout" />
            </Icon>
            <Icon>
              <img src="https://i.postimg.cc/9Fk0VKfz/love.png" alt="love Icon by Icon Mafia on IconScout" />
            </Icon>
          </FixedMess>
          <Support>
            <img src="" alt="" />
            <BlockSup>
              <p>Help me to get new pc</p>
              <ProgressBar></ProgressBar>
            </BlockSup>
            <Icondiv><IoIosArrowForward /></Icondiv>
          </Support>
        </HelpOwner>
        <CommentArea>
          <img src="" alt="" />
          <IoMdArrowDropdown />
          <Input />
          <InputReactions>
            <AiOutlineStar />
            <BsEmojiSmile />
            <BiNote />
          </InputReactions>
          <AiOutlineLike />
          <RiShareForwardLine />
        </CommentArea>
      </ChatFooter>
    </LiveChatSt>
  )
}

export default LiveChat;