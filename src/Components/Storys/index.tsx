import React from 'react';

import AddStory from '../AddStory';
import FriendStory from '../FriendStory';
import { StorysSt } from './styles';

const Storys = () => {
  return (
    <StorysSt>
      <AddStory />
      <FriendStory />
    </StorysSt>
  )
}

export default Storys;