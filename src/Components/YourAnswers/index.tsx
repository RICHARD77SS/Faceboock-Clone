import React from 'react';

import { YourAnswersSt } from './styles';
import { FaCommentAlt } from 'react-icons/fa';


const YourAnswers = () => {
  return(
    <YourAnswersSt >
      <FaCommentAlt />
      <p>Os comentários aos quais você respondeu e as respostas aos seus comentários aparecerão aqui</p>
    </YourAnswersSt>
  )
}

export default YourAnswers;