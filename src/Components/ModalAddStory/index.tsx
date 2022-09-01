import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import { BsFillGearFill } from 'react-icons/bs'
import Button from '../Button';
import Hr from '../Hr';
import Logo from '../Logo';
import MakeTextStory from '../MakeTextStory';
import MakePhotoStory from '../MakePhotoStory';
import Menu from '../Menu';
import Notification from '../Notification';
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom';

import { ModalSt, ModalLeftSt, ModalRightSt, FlexSt, ModalAddStoryTopNavSt, ModalAddStoryBlockSt, ModalAddStoryFlexSt } from './styles';
import Config from '../Config';

const ModalAddStory = () => {
  const [openNotification, setOpenNotification] = React.useState(false);
  const toggleNotification = () => {
    setOpenNotification(openNotification === true ? false : true);

  }
 const [config, setConfig] = React.useState(false)
  return (
    <ModalSt>
      <ModalLeftSt>
        <FlexSt>
          <Link to='/'>
            <Button className='btn-close' ><AiOutlineClose /></Button>
          </Link>
          <Logo />
        </FlexSt>
        <Hr width='100%' />
        <FlexSt>
          <h2>Seu Story</h2>
          <Button onClick={() => { setConfig(true) }} className='btn-config'><BsFillGearFill /></Button>
        </FlexSt>
        {config?
          <>
            <Config>
              <Button className='btn cancelar' onClick={() => {setConfig(false)}}>Cancelar</Button>
            </Config>
          </> : null}
        <FlexSt>
          <img src="https://i.postimg.cc/brczWrGr/richardsilva.jpg" alt="" />
          <p>Richard Silva</p>
        </FlexSt>
        <br />
        <Hr width='100%' />
      </ModalLeftSt>
      <ModalRightSt>
        <ModalAddStoryBlockSt>
          <ModalAddStoryTopNavSt>
            <Tooltip title='Menu'>
              <Menu />
            </Tooltip>
            <Tooltip title='Notificações'>
                <Button className='btn-notification' onClick={() => toggleNotification()}>
                  <svg viewBox="0 0 28 28" fill="#000" height="20" width="20"><path d="M7.847 23.488C9.207 23.488 11.443 23.363 14.467 22.806 13.944 24.228 12.581 25.247 10.98 25.247 9.649 25.247 8.483 24.542 7.825 23.488L7.847 23.488ZM24.923 15.73C25.17 17.002 24.278 18.127 22.27 19.076 21.17 19.595 18.724 20.583 14.684 21.369 11.568 21.974 9.285 22.113 7.848 22.113 7.421 22.113 7.068 22.101 6.79 22.085 4.574 21.958 3.324 21.248 3.077 19.976 2.702 18.049 3.295 17.305 4.278 16.073L4.537 15.748C5.2 14.907 5.459 14.081 5.035 11.902 4.086 7.022 6.284 3.687 11.064 2.753 15.846 1.83 19.134 4.096 20.083 8.977 20.506 11.156 21.056 11.824 21.986 12.355L21.986 12.356 22.348 12.561C23.72 13.335 24.548 13.802 24.923 15.73Z"></path>
                  </svg>
                </Button>
            </Tooltip>
            {openNotification ?
              <>
                <Button className='bd' onClick={() => setOpenNotification(false)}></Button>
                <Notification />
              </>
              : null}
            
            <img src="https://i.postimg.cc/brczWrGr/richardsilva.jpg" alt="" />
          </ModalAddStoryTopNavSt>
          <ModalAddStoryFlexSt>
            <MakeTextStory />
            <MakePhotoStory />
          </ModalAddStoryFlexSt>
        </ModalAddStoryBlockSt>
      </ModalRightSt>
    </ModalSt>
  )
}

export default ModalAddStory;