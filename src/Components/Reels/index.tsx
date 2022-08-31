import React from 'react';
import { ReelsSt, UsernameSt } from './styles';
import { Link } from 'react-router-dom';

interface ReelsProps {
  reelsImage?: string;
  reelsImageAlt?: string;
  reelsViews?: string;
  reelsHref?: string;
}

export const Reels = (Props: ReelsProps) => {

  return (
    <Link to={{pathname: `/reels/${Props.reelsHref}`}}>
      <ReelsSt>
        <img src={Props.reelsImage} alt={Props.reelsImageAlt} />
        <UsernameSt>
          <pre><p>{Props.reelsViews}</p></pre>
        </UsernameSt>
      </ReelsSt>
    </Link>
  )
}

export default Reels;