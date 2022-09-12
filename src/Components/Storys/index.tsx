import React from 'react';

import { GrPrevious, GrNext } from 'react-icons/gr'

import { StorysSt } from './styles';
import AddStory from '../AddStory';
import StorysViws from '../StorysViws';


import Button from '../Button';


const Storys = () => {

  const goLeft = () => {
    let slide = document.getElementById('slider');
    if (slide != null) {
    slide.scrollLeft += 300;} 
  };

  const goRight = () => {
    let slide = document.getElementById('slider');
    slide!.scrollLeft -= 300;
  };
  return (
    <StorysSt id='slider'>
      <Button className='btn prev' onClick={() => {goRight()}}>
        <GrPrevious size='20' />
      </Button>
      <AddStory />
      <StorysViws />
      <Button className='btn next' onClick={()=>{goLeft()}}>
         <GrNext size='20' />
      </Button>
    </StorysSt>
  )
}

export default Storys;