import React from 'react';

import { StorySt, UserImageSt, UsernameSt } from './styles';

import { Link } from 'react-router-dom';

interface StoryProps {
  storyImage?: string;
  storyPerfilImage?: string;
  storyPerfilImageAlt?: string;
  storyPerfilName?: string;
  storyHref?: string;
}

const FriendStory = (Props: StoryProps) => {

  return (
    <Link to={{pathname: `/storys/${Props.storyHref}`}}>
        <StorySt {...Props} storyImage={Props.storyImage}>
          <UserImageSt>
            <img src={Props.storyPerfilImage} alt={Props.storyPerfilImageAlt} />
          </UserImageSt>
          <UsernameSt>
            <p>{Props.storyPerfilName}</p>
          </UsernameSt>
        </StorySt>
    </Link>

  )
}

export default FriendStory;