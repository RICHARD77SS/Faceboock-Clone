
import { GrPrevious, GrNext } from 'react-icons/gr'

import { ReelsListSt } from './styles';
import ReelsViw from '../ReelsViw';


import Button from '../Button';


const Storys = () => {

  const goLeft = () => {
    let slide = document.getElementById('slider');
    if (slide != null) {
      slide.scrollLeft += 300;
    }
  };

  const goRight = () => {
    let slide = document.getElementById('slider');
    slide!.scrollLeft -= 300;
  };
  return (
    <ReelsListSt id='slider'>
      <Button className='btn prev' onClick={() => { goRight() }}>
        <GrPrevious size='20' />
      </Button>
      <ReelsViw />
      <Button className='btn next' onClick={() => { goLeft() }}>
        <GrNext size='20' />
      </Button>
    </ReelsListSt>
  )
}

export default Storys;