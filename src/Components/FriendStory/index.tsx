import React from 'react';

import { StorySt, UserImageSt, UsernameSt } from './styles';

import Button from '../Button';

interface StoryProps {
  storyImage?: string;
  storyPerfilImage?: string;
  storyPerfilImageAlt?: string;
  storyPerfilName?: string;
}

const FriendStory = (Props: StoryProps) => {

  return (
    <Button>
      <StorySt {...Props} storyImage={Props.storyImage}>
        <UserImageSt>
          <img src={Props.storyPerfilImage} alt={Props.storyPerfilImageAlt} />
        </UserImageSt>
        <UsernameSt>
          <p>{Props.storyPerfilName}</p>
        </UsernameSt>
      </StorySt>
    </Button>

  )
}

export default FriendStory;