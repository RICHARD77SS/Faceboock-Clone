import React from 'react';
import Button from '../Button';
import { ModalSt, ModalLeftSt, ModalRightSt } from './styles';
interface PropsModal {
  children: React.ReactNode;
}
const ModalAddStory = (Props:PropsModal) => {
  
  return (
    <ModalSt {...Props}>
      <ModalLeftSt>
        <div className="flex">
          {Props.children}
          <p>Logo</p>
        </div>
        <div className="flex">
          <h2>Seu Story</h2>
          <Button>Config</Button>
        </div>
      </ModalLeftSt>
      <ModalRightSt>

      </ModalRightSt>
    </ModalSt>
  )
}

export default ModalAddStory;