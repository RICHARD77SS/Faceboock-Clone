import React from 'react';
import { ReelsSt, UsernameSt } from './styles';
import { Link } from 'react-router-dom';
export const Reels = () => {

  return (
    <Link to='/reels'>
      <ReelsSt>
        <img src="https://img.freepik.com/fotos-gratis/retrato-de-jovem-bonito-alegre-menina-sorridente_176420-9389.jpg?w=740&t=st=1660568072~exp=1660568672~hmac=ed98e0134dd3eaea1eabc3edfd16b23ec4a33fd36099b1ac6e3f1881f9809bc8" alt="Story-background" />
        <UsernameSt>
          <p>12K</p>
        </UsernameSt>
      </ReelsSt>
    </Link>
  )
}

export default Reels;