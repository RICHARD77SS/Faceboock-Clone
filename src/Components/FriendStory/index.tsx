import React from 'react';

import { StorySt, UserImageSt, UsernameSt, Div } from './styles';

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
    <Div >
      <Link className='link' to={{ pathname: `/storys/${Props.storyHref}` }}>
        <StorySt {...Props} storyImage={Props.storyImage}>
          <UserImageSt>
            <img src={Props.storyPerfilImage} alt={Props.storyPerfilImageAlt} />
          </UserImageSt>
          <UsernameSt>
            <p className='username'>{Props.storyPerfilName}</p>
          </UsernameSt>
        </StorySt>
      </Link>
    </Div>
  )
}

export default FriendStory;