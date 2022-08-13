import React from 'react';
import { GrAdd } from 'react-icons/gr'
import { GpChatSt, FlexSt } from './styles';
import Button from '../Button';

const GpChat = () => {
  return (
    <GpChatSt>
      <FlexSt>
        <h4>Conversas em grupo</h4>
      </FlexSt>
      <Button className='bt-user'>
        <img src="https://cdn.pixabay.com/photo/2020/04/11/05/21/boots-5028821_960_720.jpg" alt="" />
        <h4>Username</h4>
      </Button>
      <Button className='bt-user'>
        <img src="https://cdn.pixabay.com/photo/2020/04/11/05/21/boots-5028821_960_720.jpg" alt="" />
        <h4>Username</h4>
      </Button>
      <Button className='bt-user'>
        <img src="https://cdn.pixabay.com/photo/2020/04/11/05/21/boots-5028821_960_720.jpg" alt="" />
        <h4>Username</h4>
      </Button>
      <Button className='bt-user'>
        <img src="https://cdn.pixabay.com/photo/2020/04/11/05/21/boots-5028821_960_720.jpg" alt="" />
        <h4>Username</h4>
      </Button>
      <Button className='bt-user'>
        <img src="https://cdn.pixabay.com/photo/2020/04/11/05/21/boots-5028821_960_720.jpg" alt="" />
        <h4>Username</h4>
      </Button>
      <Button className='bt-user'>
        <div className="div-ico"><GrAdd /></div>
        <h4>Criar novo grupo</h4>
      </Button>
    </GpChatSt>
  )
}

export default GpChat;