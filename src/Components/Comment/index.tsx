import React from 'react'
import { Post, BlockMess, Mess, MessInteractions } from './styles'


interface CommentProps {
  userImage?: string;
  userName?: string;
  comment?: string;
  dataComment?: string;
}
const Comment = (Props:CommentProps) => {
  return (
    <Post>
      <img src={Props.userImage} alt="" />
      <BlockMess>
        <Mess>
          <h4>{Props.userName}</h4>
          <p>{Props.comment}</p>
        </Mess>
        <MessInteractions>
          <p>Curtir</p>
          <p>Responder</p>
          <p>{Props.dataComment}</p>
        </MessInteractions>
      </BlockMess>
    </Post>
  )
}

export default Comment;