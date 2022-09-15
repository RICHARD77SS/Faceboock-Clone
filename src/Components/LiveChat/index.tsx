import React from 'react';

import { Container, LiveChatSt, Comments, ChatFooter, HelpOwner, FixedMess, Support, BlockSup, ProgressBar, IconDiv, CommentArea, InputReactions, Icon } from './styles';
import { RiShareForwardLine } from 'react-icons/ri';
import { AiOutlineLike, AiOutlineStar } from 'react-icons/ai';
import { BiNote } from 'react-icons/bi';
import { BsEmojiSmile, BsPinAngleFill } from 'react-icons/bs';
import Input from './../Input/index';
import { IoMdArrowDropdown, IoIosArrowForward } from 'react-icons/io';
import Button from '../Button';
import Comment from '../Comment';

const LiveChat = () => {
  return (
    <Container>

      <LiveChatSt id='btn-2' className='content'>
        <Comments>
          <Comment userImage='' userName='' comment='' dataComment=''/>
        </Comments>
        <ChatFooter>
          <HelpOwner>
            <FixedMess>
              <BsPinAngleFill className='pin' />
              <img className='img' src="https://img.freepik.com/fotos-gratis/jovem-e-bela-modelo-posando-na-floresta-de-inverno-retrato-de-moda-elegante_1153-5138.jpg?w=740&t=st=1663173731~exp=1663174331~hmac=efc301aa136b880e42330f403ca42b88e4afb477eb0185114ed13a50d8f71f0b" alt="" />
              <Icon>
                <img className='love' src="https://i.postimg.cc/9Fk0VKfz/love.png" alt="love Icon by Icon Mafia on IconScout" />
                <img className='like' src="https://i.postimg.cc/vmFmxnfs/like.png" alt="Like Icon by Icon Mafia on IconScout" />
                <p>5</p>
              </Icon>
            </FixedMess>
            <Support>
              <img src="https://img.freepik.com/fotos-gratis/jovem-e-bela-modelo-posando-na-floresta-de-inverno-retrato-de-moda-elegante_1153-5138.jpg?w=740&t=st=1663173731~exp=1663174331~hmac=efc301aa136b880e42330f403ca42b88e4afb477eb0185114ed13a50d8f71f0b" alt="" />
              <BlockSup>
                <p>Help me to get new pc</p>
                <ProgressBar></ProgressBar>
              </BlockSup>
            </Support>
            <IconDiv><IoIosArrowForward /></IconDiv>
          </HelpOwner>
          <Button>Community Standards</Button>
          <CommentArea>
            <img src="https://i.postimg.cc/brczWrGr/richardsilva.jpg" alt="" />
            <IoMdArrowDropdown />
            <Input placeholder=" Escreva um com..." />
            <InputReactions>
              <AiOutlineStar />
              <BsEmojiSmile />
              <BiNote />
            </InputReactions>
            <IconDiv>
              <AiOutlineLike />
            </IconDiv>
            <IconDiv>
              <RiShareForwardLine />
            </IconDiv>
          </CommentArea>
        </ChatFooter>
      </LiveChatSt>
    </Container>
  )
}

export default LiveChat;