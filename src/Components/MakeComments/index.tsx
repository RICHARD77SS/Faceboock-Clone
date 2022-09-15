import React from 'react'

import { MdOutlineEmojiEmotions, MdOutlineGif } from 'react-icons/md';
import { AiOutlineCamera } from 'react-icons/ai';
import { GrEmoji } from 'react-icons/gr';
import { TbNote } from 'react-icons/tb';
import { MakeComment, InputReactions, DivIcon } from './styles'
import Input from '../Input';
interface MakeCommentsProps {
  userImage?: string;
}

const MakeComments = (Props:MakeCommentsProps) => {
  return (
    <MakeComment>
      <img src="https://i.postimg.cc/brczWrGr/richardsilva.jpg" alt="" />
      <Input placeholder='  Escreva um comentário...' />
      <InputReactions>
        <DivIcon>
          <MdOutlineEmojiEmotions />
        </DivIcon>
        <DivIcon>
          <GrEmoji />
        </DivIcon>
        <DivIcon>
          <AiOutlineCamera />
        </DivIcon>
        <DivIcon>
          <MdOutlineGif />
        </DivIcon>
        <DivIcon>
          <TbNote />
        </DivIcon>
      </InputReactions>
    </MakeComment>
  )
}

export default MakeComments;