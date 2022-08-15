import React from 'react';

import { BsFillGearFill } from 'react-icons/bs'
import Button from '../Button';
import Hr from '../Hr';
import Logo from '../Logo';
import MakeTextStory from '../MakeTextStory';
import MakePhotoStory from '../MakePhotoStory';



import { ModalSt, ModalLeftSt, ModalRightSt, FlexSt } from './styles';
interface PropsModal {
  children: React.ReactNode;
}
const ModalAddStory = (Props: PropsModal) => {

  return (
    <ModalSt {...Props}>
      <ModalLeftSt>
        <FlexSt>
          {Props.children}
          <Logo />
        </FlexSt>
        <Hr width='100%' />
        <FlexSt>
          <h2>Seu Story</h2>
          <Button className='btn-config'><BsFillGearFill /></Button>
        </FlexSt>
        <FlexSt>
          <img src="https://i.postimg.cc/brczWrGr/richardsilva.jpg" alt="" />
          <p>Richard Silva</p>
        </FlexSt>
        <br />
        <Hr width='100%' />
      </ModalLeftSt>
      <ModalRightSt>
        <MakePhotoStory />
        <MakeTextStory />
      </ModalRightSt>
    </ModalSt>
  )
}

export default ModalAddStory;