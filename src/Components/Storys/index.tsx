import React from 'react';

import AddStory from '../AddStory';
import StorysViws from '../StorysViws';
import { StorysSt } from './styles';

const Storys = () => {
  return (
    <StorysSt>
      <AddStory />
      <StorysViws />
    </StorysSt>
  )
}

export default Storys;