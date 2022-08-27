import React from 'react';
import { NavRightSt, ListSt } from './styles';
import Tooltip from '@mui/material/Tooltip';
import { GrFormAdd } from 'react-icons/gr';
import Button from '../Button';
import Menu from '../Menu';
import CriarMain from '../CriarMain';
import Notification from '../Notification';
import Batepapo from '../Batepapos';

const NavRight = () => {
  const [openCriar, setOpenCriar] = React.useState(false);
  const toggleCriar = () => {
    setOpenCriar(openCriar === true ? false : true);
  };

  const [openMess, setOpenMess] = React.useState(false);
  const toggleMess = () => {
    setOpenMess(openMess === true ? false : true);
  }
  const [openNotification, setOpenNotification] = React.useState(false);
  const toggleNotification = () => {
    setOpenNotification(openNotification === true ? false : true);
  }

  return (
    <NavRightSt>
      <Tooltip title='Menu'>
        <ListSt className='main-menu'>
          <Menu />
        </ListSt>
      </Tooltip>
      <Tooltip title='Criar'>
        <ListSt className='main-criar'>
          <Button className='btn-criar' onClick={() => toggleCriar()}>
            <GrFormAdd />
          </Button>
        </ListSt>
      </Tooltip>
      {openCriar ?
        <>
          <CriarMain />
          <Button className='bd' onClick={() => setOpenCriar(false)}></Button>
        </> : null}
      <Tooltip title='Messenger'>
        <ListSt>
          <Button onClick={()=>toggleMess()}>
            <svg viewBox="0 0 28 28" fill="#000" height="20" width="20"><path d="M14 2.042c6.76 0 12 4.952 12 11.64S20.76 25.322 14 25.322a13.091 13.091 0 0 1-3.474-.461.956 .956 0 0 0-.641.047L7.5 25.959a.961.961 0 0 1-1.348-.849l-.065-2.134a.957.957 0 0 0-.322-.684A11.389 11.389 0 0 1 2 13.682C2 6.994 7.24 2.042 14 2.042ZM6.794 17.086a.57.57 0 0 0 .827.758l3.786-2.874a.722.722 0 0 1 .868 0l2.8 2.1a1.8 1.8 0 0 0 2.6-.481l3.525-5.592a.57.57 0 0 0-.827-.758l-3.786 2.874a.722.722 0 0 1-.868 0l-2.8-2.1a1.8 1.8 0 0 0-2.6.481Z"></path>
            </svg>
          </Button>
        </ListSt>
      </Tooltip>
      {openMess ?
        <>
          <Batepapo />
          <Button className='bd' onClick={() => setOpenMess(false)}></Button>
        </>
        : null}
      <Tooltip title='Notificações'>
        <ListSt>
          <Button onClick={() => toggleNotification()}>
            <svg viewBox="0 0 28 28" fill="#000" height="20" width="20"><path d="M7.847 23.488C9.207 23.488 11.443 23.363 14.467 22.806 13.944 24.228 12.581 25.247 10.98 25.247 9.649 25.247 8.483 24.542 7.825 23.488L7.847 23.488ZM24.923 15.73C25.17 17.002 24.278 18.127 22.27 19.076 21.17 19.595 18.724 20.583 14.684 21.369 11.568 21.974 9.285 22.113 7.848 22.113 7.421 22.113 7.068 22.101 6.79 22.085 4.574 21.958 3.324 21.248 3.077 19.976 2.702 18.049 3.295 17.305 4.278 16.073L4.537 15.748C5.2 14.907 5.459 14.081 5.035 11.902 4.086 7.022 6.284 3.687 11.064 2.753 15.846 1.83 19.134 4.096 20.083 8.977 20.506 11.156 21.056 11.824 21.986 12.355L21.986 12.356 22.348 12.561C23.72 13.335 24.548 13.802 24.923 15.73Z"></path>
            </svg>
          </Button>
        </ListSt>
      </Tooltip>
      {openNotification ?
        <>
          <Notification />
          <Button className='bd' onClick={() => setOpenNotification(false)}></Button>
        </>
        : null}
      <Tooltip title='Conta'>
        <ListSt>
          <img className='image' src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t1.6435-9/120923170_1006167356475369_7354394842471469497_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Pyp9kDCjpVgAX93LRRR&tn=GQbFix6_80bH1mDo&_nc_ht=scontent.fcgh2-1.fna&oh=00_AT-Pg3h2TmGfm4KcKlbb1sQnOqJ6qIPAAlbLM0MCA2Ihaw&oe=6317C312" alt="" />
        </ListSt>
      </Tooltip>
    </NavRightSt>
  )
}

export default NavRight;